const express = require('express');

//Middlewares
const { repairPending } = require('../middlewares/rerpairs.middlewares');
const {
  createRepairValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');
const {
  getAllRepairs,
  createDate,
  getRepairById,
  updateRepair,
  deleteRepair,
} = require('../controllers/repairs.controller');

const router = express.Router();

router
  .route('/')
  .get(getAllRepairs)
  .post(createRepairValidations, checkValidations, createDate);

router
  .route('/:id')
  .get(repairPending, getRepairById)
  .patch(repairPending, updateRepair)
  .delete(repairPending, deleteRepair);

module.exports = { repairsRouter: router };
