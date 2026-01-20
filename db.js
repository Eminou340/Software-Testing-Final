import mongoose from 'mongoose';

const connectDB = async () => {
    if (process.env.NODE_ENV !== 'test') return;

    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Connection Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;