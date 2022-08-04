module.exports = (app) => {
  const actions = require('../controllers/actions.controller');
  const router = require('express').Router();

  router.get('/task/:id', actions.findAll);
  router.put('/:id', actions.update)
  router.post('/', actions.create);
  app.use('/api/actions', router);
};
