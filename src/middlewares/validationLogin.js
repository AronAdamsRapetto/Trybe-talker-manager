const validateAttributes = (email, password, res, next) => {
  // regex para validação obtida de https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  const emailRegex = /\S+@\S+\.\S+/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  if (password.length < 6) {
    res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  } else {
    next();
  }
};

const authLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: !email ? 'O campo "email" é obrigatório' 
    : 'O campo "password" é obrigatório' });
  }

  validateAttributes(email, password, res, next);
};

module.exports = authLogin;