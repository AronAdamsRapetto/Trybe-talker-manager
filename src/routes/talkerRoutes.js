const { Router } = require('express');
const talkerService = require('../service/talkerService');

const talkerRoutes = Router();

talkerRoutes.get('/', async (_req, res) => {
  const talkers = await talkerService.getAllTalkers();

  res.status(200).json(talkers);
});

module.exports = talkerRoutes;