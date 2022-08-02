module.exports = (app) => {
  const users = require('../controllers/auth.controller');
  const router = require('express').Router();

  router.post('/login', users.logIn);
  router.post('/signup', users.signUp);
  app.use('/api/auth', router);
};
