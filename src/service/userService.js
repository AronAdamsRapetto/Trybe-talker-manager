const utils = require('../utils');

const addUser = async (_userInfo) => {
  const token = utils.generateToken();  

  return token;
};

module.exports = {
  addUser,
};