const jwt = require('jsonwebtoken');
const db = require('../models');
const Tasks = db.tasks;
const Op = db.Sequelize.Op;

// Create and Save a new task
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: 'Task title missing.',
    });
    return;
  }
  try {
    const { userId } = jwt.verify(req.cookies.auth, process.env.API_SIGNATURE);
    const tasks = {
      userId: userId,
      title: req.body.title,
      limit: req.body.limit || 0,
    };
    Tasks.create(tasks)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } catch (err) {
    return res.status(500).send({
      name: err.name || 'Unexpected error',
      message: err.message || 'Some error occurred',
    });
  }
};
// Retrieve all tasks from the database.
exports.findAll = (req, res) => {
  const userId = req.params.id;
  Tasks.findAll({ where: { userId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tasks.',
      });
    });
};
// Find a single task with an id
exports.findOne = (req, res) => {
  const taskId = req.params.id;
  Tasks.findByPk(taskId).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: 'Not Found',
      });
    }
  });
};
// Update a task by the id in the request
exports.update = (req, res) => {};
// Delete a task with the specified id in the request
exports.delete = (req, res) => {};
// Delete all tasks from the database.
exports.deleteAll = (req, res) => {};
// Find all published tasks
exports.findAllPublished = (req, res) => {};
