import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer;

export const mochaHooks = {
  async beforeAll() {
    this.timeout(30000);
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
    await mongoose.connect(uri);
  },

  async afterAll() {
    await mongoose.disconnect();
    if (mongoServer) {
      await mongoServer.stop();
    }
  }
};