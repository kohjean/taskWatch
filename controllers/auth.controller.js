const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../models');
const Users = db.users;
const saltRound = 10;
const maxAge = 1000 * 60 * 10;

exports.signUp = (req, res) => {
  if (!req.body.name || !req.body.mail || !req.body.password) {
    return res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  bcrypt.hash(req.body.password, saltRound, (err, hashedPassword) => {
    if (err !== undefined) {
      return res.status(500).send({ message: err });
    }
    const user = {
      name: req.body.name,
      mail: req.body.mail,
      password: hashedPassword,
    };
    Users.create(user)
      .then((data) => {
        const token = jwt.sign(
          {
            name: req.body.name,
            userId: data.id,
          },
          process.env.API_SIGNATURE,
          {
            expiresIn: '1h',
          }
        );
        res.cookie('auth', token, { maxAge: maxAge, httpOnly: true });
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred',
        });
      });
  });
};

exports.logIn = (req, res) => {
  if (!req.body.name || !req.body.password) {
    return res.status(400).send({
      message: 'Parameters are missing.',
    });
  }
  const name = req.body.name;
  Users.findOne({ where: { name: name } })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }
      bcrypt.compare(req.body.password, data.password, (err, result) => {
        if (err !== undefined) {
          return res.status(500).send({
            message: err,
          });
        }
        if (!result) {
          res.status(401).send({
            message: 'Password is incorrect',
          });
        } else {
          const token = jwt.sign(
            { name: name, userId: data.id },
            process.env.API_SIGNATURE,
            {
              expiresIn: '1h',
            }
          );
          res.cookie('auth', token, { maxAge: maxAge, httpOnly: true });
          res.json({});
        }
      });
    })
    .catch((err) => {
      console.log('err: ' + err);
      res.status(500).send({
        message: err,
      });
    });
};
