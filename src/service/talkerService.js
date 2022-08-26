const fs = require('fs').promises;
const { join } = require('path');

const readDataFile = async (path) => {
  try {
    const talkers = await fs.readFile(join(__dirname, path), 'utf-8');

    return JSON.parse(talkers);
  } catch (error) {
    console.log('Erro ao ler arquivo: ', error.message);
    return null;
  }
};

const getAllTalkers = async () => {
  const path = '../talker.json';
  const talker = await readDataFile(path);
  return talker;
};

module.exports = {
  getAllTalkers,
};