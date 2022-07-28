const db = require('../models');
const Users = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.create = (req, res) => {
  if (!req.body.name || !req.body.mail || !req.body.password) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }
  const user = {
    name: req.body.name,
    mail: req.body.mail,
    password: req.body.password,
  };

  Users.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred',
      });
    });
};

exports.findOne = (req, res) => {
  const userId = req.params.id;
  Users.findByPk(userId).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: 'Not Found',
      });
    }
  });
};
// Update a user by the id in the request
exports.update = (req, res) => {};
// Delete a user with the specified id in the request
exports.delete = (req, res) => {};
// Delete all users from the database.
exports.deleteAll = (req, res) => {};
// Find all published users
exports.findAllPublished = (req, res) => {};
