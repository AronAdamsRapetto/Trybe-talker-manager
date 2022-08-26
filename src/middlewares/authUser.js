const authUser = async (req, res, next) => {
  const tokenUser = req.header('authorization');

  if (!tokenUser) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (tokenUser.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  next();
};

module.exports = authUser;