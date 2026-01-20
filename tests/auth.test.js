import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';
import User from '../models/user.js';

describe('Authentication Tests', function() {
  this.timeout(10000);

  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'test@unilak.ac.rw',
        password: 'Password123!'
      });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('token');
  });

  it('should login and return a token', async () => {
    await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Login User',
        email: 'login@unilak.ac.rw',
        password: 'Password123!'
      });

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'login@unilak.ac.rw',
        password: 'Password123!'
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token');
  });

  it('should fail registration with invalid email', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Bad Email',
        email: 'not-an-email',
        password: 'Password123!'
      });
    expect(res.status).to.equal(400);
  });

  it('should fail login with wrong password', async () => {
    await request(app)
      .post('/api/auth/register')
      .send({
        name: 'User',
        email: 'wrong@test.com',
        password: 'Password123!'
      });

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'wrong@test.com',
        password: 'WrongPassword'
      });
    expect(res.status).to.equal(401);
  });
});