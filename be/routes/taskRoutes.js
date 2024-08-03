const { getTasks, createTask, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');

async function routes(fastify, options) {
  fastify.get('/tasks', getTasks);
  fastify.post('/tasks', createTask);
  fastify.get('/tasks/:id', getTaskById);
  fastify.put('/tasks/:id', updateTask);
  fastify.delete('/tasks/:id', deleteTask);
}

module.exports = routes;
    