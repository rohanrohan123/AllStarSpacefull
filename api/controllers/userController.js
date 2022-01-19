// import UserModel from "../models/User.js"

// class UserController {
//     //creat
//     static createDoc = async (req, res) => {
//       try {
//         const { stuname, email, age, fees } = req.body //object destructuring
//         const doc = new StudentModel({
//           stuname: stuname,
//           email: email,
//           age: age,
//           fees: fees,
//         })
//         //  second way to destructure
  
//         // const doc =new StudentModel(req.body)
//         // const result = await doc.save();
//         const result = await doc.save();
//         res.status(201).send(result)
//       }
//       catch (error) {
//         console.log(error)
//       }
//     }
  
  
    
   
  
//   }
  
//   export default UserController