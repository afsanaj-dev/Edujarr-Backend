const courseSchema = require("../model/courseSchema");

async function deleteCourseController(req, res) {
  const { id } = req.params;

  try {
    const course = await courseSchema.findById(id);

    if (!course) {
      return res.status(404).send({ error: "Course not found" });
    }

    await course.deleteOne(); 
    res.status(200).send({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "An error occurred while deleting the course" });
  }
}

module.exports = deleteCourseController;
