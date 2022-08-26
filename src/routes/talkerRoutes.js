const { Router } = require('express');
const talkerService = require('../service/talkerService');

const talkerRoutes = Router();

talkerRoutes.get('/', async (_req, res) => {
  const talkers = await talkerService.getAllTalkers();

  res.status(200).json(talkers);
});

talkerRoutes.get('/:id', async (req, res) => {
  const { id } = req.params;

  const talker = await talkerService.getTalkerById(id);

  res.status(talker ? 200 : 404).json(talker || { message: 'Pessoa palestrante não encontrada' });
});

module.exports = talkerRoutes;