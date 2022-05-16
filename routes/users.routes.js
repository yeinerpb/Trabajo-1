const express = require('express');

//Middlewares
const {
  userExists,
  protectToken,
  protectAccountOwner,
} = require('../middlewares/users.middlewares');
const {
  createUserValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

//controllers
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  login,
} = require('../controllers/users.controller');

const router = express.Router();

router
  .route('/')
  .get(getAllUsers)
  .post(createUserValidations, checkValidations, createUser);

router.post('/login', login);

router
  .route('/:id')
  .get(userExists, getUserById)
  .patch(protectToken, userExists, protectAccountOwner, updateUser)
  .delete(protectToken, userExists, protectAccountOwner, deleteUser);

module.exports = { usersRouter: router };
