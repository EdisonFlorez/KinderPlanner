const instructorCtr = {};
const Instructor = require("../models/instructor.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { response } = require("express");
/*
instructorCtr.create = async(req, res) => {
  const { name, lastName, personalId, contact, mail, password } = req.body;
  const instructor = new Instructor({
    name,
    lastName,
    personalId,
    contact,
    mail,
    password
  });
  const response = await instructor.save();
  res.json({
    message: "Todo exitoso",
    response,
  });
}*/

instructorCtr.create = async (req, res) => {
  const body = req.body;
  try {
    const instructorDB = await Instructor.create(body);
    res.status.json(instructorDB);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrió un error",
      error,
    });
    console.error(error);
  }
};

instructorCtr.getInstructors = async (req, res) => {
  const response = await Instructor.find();
  res.json(response);
};
instructorCtr.getOne = async (req, res) => {
  const _id = req.params.id;
  try {
    const instructorDB = await Instructor.findOne({ _id });
    res.json(instructorDB);
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrió un error",
      error,
    });
  }
};

instructorCtr.update = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const instructorDB = await Instructor.findByIdAndUpdate(_id, body, {
      new: true,
    });
    res.json(instructorDB);
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrió un error",
      error,
    });
    console.error(error);
  }
};

instructorCtr.delete = async (req, res) => {
  const _id = req.params.id;
  try {
    const instructorDB = await Instructor.findByIdAndDelete({ _id });
    if (instructorDB) {
      return res.status(400).json({
        mesagge: "No se encontró el id indicado",
        error,
      });
    }
    res.json(instructorDB);
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrió un error. ",
      error,
    });
  }
};

module.exports = instructorCtr;
