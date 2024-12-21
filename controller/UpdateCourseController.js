const courseSchema = require("../model/courseSchema");
async function updateCourseController(req, res) {
    let { title, description, price } = req.body;
  
    try {
  
      if(title){
        let course = await courseSchema.findOneAndUpdate(
          { title :title },
          { description: description },
          { price : price }
        );
        res.send(course);
      }
    } catch (error) {
      return res.status(404).send({ error: error });
    }
}
  module.exports = updateCourseController