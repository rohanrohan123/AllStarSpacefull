import loginModel from "../models/login.js";

class loginController {
  static createlogin = async (req, res) => {
    try {
       const logindata =new loginModel(req.body)
       const loginresult = await logindata.save();
      res.status(201).send(loginresult)
    }
    catch (error) {
      console.log(error)
    }
  }

  // static getloginDoc = async (req, res) => {
  //   try {
  //     const resultlogin = await loginModel.find()
  //     res.send(resultlogin)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  }
  
  export default loginController