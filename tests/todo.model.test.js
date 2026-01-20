import { expect } from 'chai';
import mongoose from 'mongoose';
import Todo from '../models/Todo.js';

describe('Todo Model Test', function() {
    this.timeout(10000);

    const mockUserId = new mongoose.Types.ObjectId();

    it('should create a valid todo with all required fields', async () => {
        const todo = new Todo({ 
            title: 'Test Task',
            createdBy: mockUserId,
            priority: 'high',
            status: 'pending'
        });
        const savedTodo = await todo.save();
        expect(savedTodo._id).to.exist;
        expect(savedTodo.title).to.equal('Test Task');
        expect(savedTodo.createdBy.toString()).to.equal(mockUserId.toString());
    });

    it('should fail validation if title is missing', async () => {
        const todo = new Todo({ 
            description: 'No title',
            createdBy: mockUserId 
        });
        try {
            await todo.save();
        } catch (error) {
            expect(error.errors.title).to.exist;
        }
    });

    it('should fail validation if createdBy is missing', async () => {
        const todo = new Todo({ title: 'No Creator' });
        try {
            await todo.save();
        } catch (error) {
            expect(error.errors.createdBy).to.exist;
        }
    });
});