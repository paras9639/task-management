require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const { connectDB } = require('./services/database');

// Connect to MongoDB
connectDB();

// Register routes
const tasksRoutes = require('./routes/taskRoutes');
fastify.register(tasksRoutes);

// Run the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
