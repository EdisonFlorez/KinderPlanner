const express = require('express');
const Instructor = require('../controller/instructor.controller')
const router = express.Router();

router.get("/", async(req, res)=>{
    res.json();
})
router.post("/", Instructor.create);

module.exports = router;