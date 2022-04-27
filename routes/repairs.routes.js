const express = require('express');

const {
  getAllRepairs,
  createDate,
  getRepairById,
  updateRepair,
  deleteRepair,
} = require('../controllers/repairs.controller');

const router = express.Router();

router.route('/').get(getAllRepairs).post(createDate);

router
  .route('/:id')
  .get(getRepairById)
  .patch(updateRepair)
  .delete(deleteRepair);

module.exports = { repairsRouter: router };
