import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';

dotenv.config();

if (process.env.NODE_ENV !== 'test') {
    connectDB();
}

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
         success: true,
         message: 'Testing environment ready!' });
});

app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        status: 'healthy' 
    });
});

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

app.use((req, res) => {
    res.status(404).json({ success: false, error: 'Route not found' });
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        error: err.message || 'Server Error'
    });
});

export default app;