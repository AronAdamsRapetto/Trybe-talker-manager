const utils = require('../utils');

const addUser = async (userInfo) => {
  const path = '../users.json';

  const token = utils.generateToken();
  const users = await utils.readDataFile(path);

  users.push({ token, ...userInfo });

  await utils.writeDataFile(users, path);

  return token;
};

module.exports = {
  addUser,
};