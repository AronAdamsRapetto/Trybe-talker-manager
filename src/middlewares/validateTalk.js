const validateTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) {
    res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  } else {
    next();
  }
};

module.exports = validateTalk;