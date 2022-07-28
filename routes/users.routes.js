module.exports = (app) => {
  const users = require('../controllers/users.controller');
  const router = require('express').Router();

  router.get('/:id', users.findOne);
  router.post('/', users.create);
  app.use('/api/users', router);
};
