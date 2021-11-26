const express = require('express');
const instructorCtr = require('../controller/instructor.controller');
const instructor = require('../controller/instructor.controller')
const router = express.Router();

router.post("/create", instructor.create);
router.get("/get", instructor.getInstructors);
router.get("/get/:id", instructor.getOne);
router.put("/update/:id", instructorCtr.update);
router.delete("/delete/:id", instructorCtr.delete);
module.exports = router;