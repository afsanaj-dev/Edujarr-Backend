const courseSchema = require("../model/courseSchema");

async function CourseController(req, res) {

  let { title, description, price } = req.body;

  try {
    let existingCourse = await courseSchema.find({ title });

    if (existingCourse.length > 0) {
      res.status(404).send({ error: "COurse name is already exists" });
    } else {
      let Course = new courseSchema({
        title,
        description,
        price,
      });
      await Course.save();

      res.status(201).send(Course);
    }
  } catch (error) {
    return res.status(404).send(error);
  }
  // res.send("course list")
}


module.exports = CourseController
    

