const db = require('../models');
const Actions = db.actions;
const Op = db.Sequelize.Op;

// Create and Save a new actions
exports.create = (req, res) => {
  if (!req.body.taskId || !req.body.pastTime) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }
  const actions = {
    taskId: req.body.taskId,
    pastTime: req.body.pastTime,
  };

  Actions.create(actions)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred',
      });
    });
};
// Retrieve all actions from the database.
exports.findAll = (req, res) => {
  const taskId = req.params.id;
  Actions.findAll({ where: { taskId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tasks.',
      });
    });
};
// Find a single action with an id
exports.findOne = (req, res) => {};
// Update a action by the id in the request
exports.update = (req, res) => {
  const actionId = req.params.id;
  Actions.update(req.body, {
    where: { id: actionId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Update successfully',
        });
      } else {
        res.send({
          message: `Cannot update action with id=${actionId}. Maybe Action was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating action with id=' + actionId,
      });
    });
};
// Delete a action with the specified id in the request
exports.delete = (req, res) => {};
// Delete all actions from the database.
exports.deleteAll = (req, res) => {};
// Find all published actions
exports.findAllPublished = (req, res) => {};
