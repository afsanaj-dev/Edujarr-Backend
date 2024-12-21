const express = require("express");
const CourseController = require("../../../controller/CourseController");
const updateCourseController = require("../../../controller/UpdateCourseController");
const deleteCourseController = require("../../../controller/DeleteCourseController");

const router = express.Router();

router.post("/course", CourseController)
router.post("/updaecourse", updateCourseController)
router.post("/deletecourse", deleteCourseController)

module.exports = router;