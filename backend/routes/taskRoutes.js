// imports
const express = require("express");
const { taskValidationSchema } = require("../model/taskModel");

const {
  handleGetTasks,
  handleGetSpecificTask,
  handlePostTask,
  updateSpecificTask,
  deleteSpecificTask,
} = require("../controller/taskController");

// initialization
const router = express.Router();

router.get("/", handleGetTasks);

router.get("/:id", handleGetSpecificTask);

router.post("/", taskValidationSchema, handlePostTask);

router.put("/:id", updateSpecificTask);

router.delete("/:id", deleteSpecificTask);

module.exports = router;
