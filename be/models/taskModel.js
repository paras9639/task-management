const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { timestamps: true } );

module.exports = mongoose.model('task', taskSchema);
