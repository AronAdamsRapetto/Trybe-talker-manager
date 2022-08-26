const fs = require('fs').promises;
const { join } = require('path');

const readDataFile = async (path = '../talker.json') => {
  try {
    const talkers = await fs.readFile(join(__dirname, path), 'utf-8');

    return JSON.parse(talkers);
  } catch (error) {
    console.log('Erro ao ler arquivo: ', error.message);
    return null;
  }
};

const getAllTalkers = async () => {
  const talkers = await readDataFile();
  return talkers;
};

const getTalkerById = async (talkerId) => {
  const talkers = await readDataFile();
  const talker = talkers.find(({ id }) => id === Number(talkerId));

  return talker;
};

module.exports = {
  getAllTalkers,
  getTalkerById,
};