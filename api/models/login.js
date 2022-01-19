import mongoose from "mongoose";


const loginschema = new mongoose.Schema({
  email:{type:String, required:true, trim:true},
  pass:{type:String, required:true},
 
})

const LoginModel = mongoose.model("login", loginschema)


// const loginschema = new mongoose.Schema({
   
//     email:{type:String, required:true, trim:true},
//     password:{type:String,required:true},
//   })

//   const loginModel = mongoose.model("login", loginschema)

export default LoginModel