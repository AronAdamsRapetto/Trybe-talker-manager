const validateValues = (watchedAt, rate, res, next) => {
// valida data 
  const isValidDate = true;

  if (!isValidDate) {
    res.status(404).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  } else if (rate < 1 || rate > 5) {
    res.status(404).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  } else {
    next();
  }
};

const validateTalkPropertys = (req, res, next) => {
  const { talk: { watchedAt, rate } } = req.body;

  if (!watchedAt || !rate) {
    return res.status(400).json({ message: !watchedAt ? 'O campo "watchedAt" é obrigatório' 
    : 'O campo "rate" é obrigatório' });
  }

  validateValues(watchedAt, rate, res, next);
};

module.exports = validateTalkPropertys;