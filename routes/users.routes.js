const express = require('express');

//Middlewares
const { userExists } = require('../middlewares/users.middlewares');
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
} = require('../controllers/users.controller');

const router = express.Router();

router
  .route('/')
  .get(getAllUsers)
  .post(createUserValidations, checkValidations, createUser);

router
  .route('/:id')
  .get(userExists, getUserById)
  .patch(userExists, updateUser)
  .delete(userExists, deleteUser);

module.exports = { usersRouter: router };
