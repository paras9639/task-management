require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return mongoose.connection.db;
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Increase timeout (30 seconds)
      socketTimeoutMS: 45000 // Increase socket timeout (45 seconds)
    });
    console.log('MongoDB connected');
    return mongoose.connection.db;
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    throw err;
  }
};

module.exports = { connectDB };
