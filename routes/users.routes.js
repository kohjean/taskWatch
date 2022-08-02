module.exports = (app) => {
  const verifyToken = require('../services/verifyToken');
  const users = require('../controllers/users.controller');
  const router = require('express').Router();

  router.get('/:id', verifyToken, users.findOne);
  app.use('/api/users', router);
};
