const Task = require('../models/taskModel');

// Get all tasks
const getTasks = async (request, reply) => {
  try {
    const tasks = await Task.find({});
    reply.send({ tasks });
  } catch (err) {
    request.log.error(err);
    reply.status(500).send(err);
  }
};

// Create a new task
const createTask = async (request, reply) => {
  try {
    const task = new Task(request.body);
    const result = await task.save();
    reply.status(201).send({ task: result });
  } catch (err) {
    request.log.error(err);
    reply.status(400).send(err); // Bad Request
  }
};

// Get a task by ID
const getTaskById = async (request, reply) => {
  try {
    const task = await Task.findById(request.params.id);
    if (!task) {
      return reply.status(404).send({ message: 'Task not found' });
    }
    reply.send({ task });
  } catch (err) {
    request.log.error(err);
    reply.status(500).send(err);
  }
};

// Update a task by ID
const updateTask = async (request, reply) => {
  try {
    const task = await Task.findByIdAndUpdate(request.params.id, request.body, { new: true });
    if (!task) {
      return reply.status(404).send({ message: 'Task not found' });
    }
    reply.send({ task });
  } catch (err) {
    request.log.error(err);
    reply.status(400).send(err); // Bad Request
  }
};

// Delete a task by ID
const deleteTask = async (request, reply) => {
  try {
    const task = await Task.findByIdAndDelete(request.params.id);
    if (!task) {
      return reply.status(404).send({ message: 'Task not found' });
    }
    reply.send({ message: 'Task deleted successfully' });
  } catch (err) {
    request.log.error(err);
    reply.status(500).send(err);
  }
};

module.exports = { getTasks, createTask, getTaskById, updateTask, deleteTask };
