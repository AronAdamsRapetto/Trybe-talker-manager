const util = require('../utils');

const authUser = async (req, res, next) => {
  const tokenUser = req.header('authorization');
  const path = '../users.json';

  if (tokenUser.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  const users = await util.readDataFile(path);
  const isValid = users.some(({ token }) => token === tokenUser);

  if (isValid) {
    next();
  } else {
    res.status(401).json({ message: 'Token não encontrado' });
  }
};

module.exports = authUser;