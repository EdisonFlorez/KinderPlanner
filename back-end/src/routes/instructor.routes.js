const express = require('express');
const instructor = require('../controller/instructor.controller')
const router = express.Router();

router.post("/create", instructor.create);
router.get("/get", instructor.getInstructors);
router.get("/get/:id", instructor.getOne);
router.put("/update/:id", instructor.update);
router.delete("/delete/:id", instructor.delete);
module.exports = router;