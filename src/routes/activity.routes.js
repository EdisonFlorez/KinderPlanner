const express = require('express');
const Activity = require('../controller/activity.controller');
const router = express.Router();

router.post("/create", Activity.create);
router.get("/get", Activity.getActivities);
router.get("/get/:id", Activity.getOne);
router.put("/update/:id", Activity.update);
router.delete("/delete/:id", Activity.delete);

module.exports = router;