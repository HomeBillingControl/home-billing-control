const express = require('express');

module.exports = app => {

  // API Routes
  const router = express.Router();
  app.use('/api', router);

  // rotas da API
  const accountService = require('../api/services/accountService');
  accountService.register(router, '/account');
};
