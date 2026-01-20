import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';
import User from '../models/user.js';
import Todo from '../models/Todo.js';

describe('Todo API Integration Tests', function() {
    this.timeout(10000);
    let token;

    before(async () => {
        await User.deleteMany({});
        await Todo.deleteMany({});

        const userRes = await request(app)
            .post('/api/auth/register')
            .send({
                name: 'Test User',
                email: 'tester@unilak.ac.rw',
                password: 'Password123!',
                role: 'user'
            });
        
        token = userRes.body.token;
    });

    it('POST /api/todos - success with auth', async () => {
        const res = await request(app)
            .post('/api/todos')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Final Exam Task',
                description: 'Completing the Software Testing project',
                priority: 'high',
                status: 'pending'
            });
        
        expect(res.status).to.equal(201);
    });

    it('GET /api/todos - success with auth', async () => {
        const res = await request(app)
            .get('/api/todos')
            .set('Authorization', `Bearer ${token}`);
        
        expect(res.status).to.equal(200);
    });

    it('POST /api/todos - fail without token', async () => {
        const res = await request(app)
            .post('/api/todos')
            .send({ title: 'Unauthorized' });
        
        expect(res.status).to.equal(401);
    });
});