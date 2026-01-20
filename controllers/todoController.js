import Todo from '../models/Todo.js';

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ createdBy: req.user._id });
        res.status(200).json({ success: true, data: todos });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const createTodo = async (req, res) => {
    try {
        const todo = await Todo.create({ 
            ...req.body, 
            createdBy: req.user._id 
        });
        res.status(201).json({ success: true, data: todo });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

export const getAdminStats = async (req, res) => {
    try {
        const totalTodos = await Todo.countDocuments();
        const pendingTodos = await Todo.countDocuments({ status: 'pending' });
        const completedTodos = await Todo.countDocuments({ status: 'completed' });

        res.status(200).json({
            success: true,
            data: { 
                totalTodos, 
                pendingTodos, 
                completedTodos 
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};