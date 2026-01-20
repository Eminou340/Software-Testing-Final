import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';
import User from '../models/user.js';

describe('Role-Based Access Control Tests', function() {
    this.timeout(10000);
    let adminToken, userToken;

    before(async () => {
        await User.deleteMany({});


        const adminRes = await request(app).post('/api/auth/register').send({
            name: 'Admin User',
            email: 'admin@unilak.ac.rw',
            password: 'Password123!',
            role: 'admin'
        });
        adminToken = adminRes.body.token;

        const userRes = await request(app).post('/api/auth/register').send({
            name: 'Regular User',
            email: 'user@unilak.ac.rw',
            password: 'Password123!',
            role: 'user'
        });
        userToken = userRes.body.token;
    });

    it('should deny a regular user from accessing admin routes', async () => {
        const res = await request(app)
            .get('/api/todos/admin-stats') 
            .set('Authorization', `Bearer ${userToken}`);
        
        expect(res.status).to.equal(403);
    });

    it('should allow an admin to access protected routes', async () => {
        const res = await request(app)
            .get('/api/todos/admin-stats')
            .set('Authorization', `Bearer ${adminToken}`);
        
        expect(res.status).to.equal(200);
        expect(res.body.success).to.be.true;
        expect(res.body.data).to.have.property('totalTodos');
    });
});