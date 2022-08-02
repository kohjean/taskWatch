const db = require('../models');
const Users = db.users;
const Op = db.Sequelize.Op;

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
