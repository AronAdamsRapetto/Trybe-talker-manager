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

module.exports = {
  getAllTalkers,
  getTalkerById,
};