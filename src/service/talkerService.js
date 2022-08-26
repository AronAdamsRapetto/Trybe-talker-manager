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

const updateTalkerById = async (talkerInfo, talkerId) => {
  const talkers = await utils.readDataFile();

  talkers.forEach(({ id }, index) => {
    if (id === Number(talkerId)) {
      talkers[index] = {
        id,
        ...talkerInfo,
      };
    }
  });

  const updatedTalker = talkers.find(({ id }) => id === Number(talkerId));

  talkers.splice(talkers.findIndex(({ id }) => id === talkerId), 1, updatedTalker);

  await utils.writeDataFile(talkers);

  return updatedTalker;
};

const removeTalkerById = async (talkerId) => {
  const talkers = await utils.readDataFile();

  const talkerToExclude = talkers.findIndex(({ id }) => id === talkerId);
  
  talkers.splice(talkerToExclude, 1);

  await utils.writeDataFile(talkers);
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  addTalker,
  updateTalkerById,
  removeTalkerById,
};