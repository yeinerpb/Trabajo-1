const { Repair } = require('../models/repair.model');

const getAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll();

    res.status(200).json({
      repairs,
    });
  } catch (error) {
    console.log(error);
  }
};

const createDate = async (req, res) => {
  try {
    const { date, userId } = req.body;
    const newDate = await Repair.create({ date, userId });

    res.status(201).json({ newDate });
  } catch (error) {
    console.log(error);
  }
};

const getRepairById = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await Repair.findOne({ where: { id } });
    if (!repair) {
      return res.status(404).json({
        status: 'error',
        messege: 'Repair not found given that id',
      });
    }
    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const repair = await Repair.findOne({ wheere: { id } });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        messege: 'Repair not found given that id',
      });
    }
    await repair.update({ status });

    res.status(200).json({ status: 'completed' });
  } catch (error) {
    console.log(error);
  }
};

const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await Repair.findOne({ where: { id } });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        messege: 'Repair not found given that id',
      });
    }
    await repair.update({ status: 'cancelled' }),
      res.status(200).json({
        status: 'succes',
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRepairs,
  createDate,
  getRepairById,
  updateRepair,
  deleteRepair,
};
