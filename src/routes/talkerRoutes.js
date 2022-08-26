const { Router } = require('express');
const talkerService = require('../service/talkerService');
const authUser = require('../middlewares/authUser');
const validateTalkerName = require('../middlewares/validateTalkerName');
const validateTalkerAge = require('../middlewares/validateTalkerAge');
const validateTalk = require('../middlewares/validateTalk');
const validateTalkPropertys = require('../middlewares/validateTalkPropertys');

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

talkerRoutes.post('/',
authUser,
validateTalkerName,
validateTalkerAge,
validateTalk,
validateTalkPropertys,
async (req, res) => {
  const { body } = req;

  const addedTalker = await talkerService.addTalker(body);

  res.status(201).json(addedTalker);
});

talkerRoutes.put('/:id',
authUser,
validateTalkerName,
validateTalkerAge,
validateTalk,
validateTalkPropertys,
async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const updatedTalker = await talkerService.updateTalkerById(body, id);

  res.status(200).json(updatedTalker);
});

module.exports = talkerRoutes;