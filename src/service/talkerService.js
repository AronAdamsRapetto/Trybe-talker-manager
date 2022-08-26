const utils = require('../utils');

const getAllTalkers = async () => {
  const talkers = await utils.readDataFile();
  return talkers;
};

const getTalkerById = async (talkerId) => {
  const talkers = await utils.readDataFile();
  const talker = talkers.find(({ id }) => id === Number(talkerId));

  return talker;
};

const addTalker = async (talker) => {
  const talkers = await utils.readDataFile();
  const talkerId = talkers[talkers.length - 1].id + 1;

  const newTalker = { id: talkerId, ...talker };

  talkers.push(newTalker);

  await utils.writeDataFile(talkers);

  return newTalker;
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  addTalker,
};