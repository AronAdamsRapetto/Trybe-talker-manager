const { Router } = require('express');
const userService = require('../service/userService');

const userRoutes = Router();

userRoutes.post('/', async (req, res) => {
  const { body } = req;

  const token = await userService.addUser(body);

  res.status(200).json({ token });
});

module.exports = userRoutes;