const moment = require('moment');

const validateValues = (watchedAt, rate, res, next) => {
  const isValidDate = moment(watchedAt, 'DD/MM/YYYY', true).isValid();  

  if (!isValidDate) {
    res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  } else if (rate < 1 || rate > 5) {
    res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  } else {
    next();
  }
};

const validateTalkPropertys = (req, res, next) => {
  const { talk: { watchedAt, rate } } = req.body;

  if (!watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!rate && rate !== 0) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }

  validateValues(watchedAt, rate, res, next);
};

module.exports = validateTalkPropertys;