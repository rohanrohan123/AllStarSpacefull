import StudentModel from '../models/Student.js'

class StudentController {
  //creat
  static createDoc = async (req, res) => {
    try {
      const { stuname, email, age, fees } = req.body //object destructuring
      const doc = new StudentModel({
        stuname: stuname,
        email: email,
        age: age,
        fees: fees,
      })
      //  second way to destructure

      // const doc =new StudentModel(req.body)
      // const result = await doc.save();
      const result = await doc.save();
      res.status(201).send(result)
    }
    catch (error) {
      console.log(error)
    }
  }


  //display all
  static getAllDoc = async (req, res) => {
    try {
      const result = await StudentModel.find()
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  }

  //display single data using id
  static getSingleDocByid = async (req, res) => {
    try {
      const result = await StudentModel.findById(req.params.id)
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  }
  //update data by id
  static updateDocById = async (req, res) => {
    try {
      const result=await StudentModel.findByIdAndUpdate(req.params.id,req.body)
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  }

  //delete data by id

  static deleteDocById = async (req, res) => {
    try {
      const result =await StudentModel.findByIdAndDelete(req.params.id)
      res.status(204).send(result)
    } catch (error) {
      console.log(error)
    }
  }


}

export default StudentController