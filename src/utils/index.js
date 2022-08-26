const fs = require('fs').promises;
const { join } = require('path');
const crypto = require('crypto');

const readDataFile = async (path = '../talker.json') => {
  try {
    const talkers = await fs.readFile(join(__dirname, path), 'utf-8');

    return JSON.parse(talkers);
  } catch (error) {
    console.log('Erro ao ler arquivo: ', error.message);
    return null;
  }
};

const writeDataFile = async (content, path = '../talker.json') => {
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(content));
  } catch (error) {
    console.log('Erro ao escrever arquivo: ', error.message);
    return null;
  }
};

const generateToken = () => crypto.randomBytes(8).toString('hex');

module.exports = {
  readDataFile,
  writeDataFile,
  generateToken,
};