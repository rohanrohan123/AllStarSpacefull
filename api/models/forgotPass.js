import  mongoose  from "mongoose";

const forgotpassschema=new mongoose.Schema({

    email:{type:String, required:true, trim:true},
    password:{type:String,required:true},
  })

  const forgotpassModel=mongoose.model("forgot",forgotpassschema)

  export default forgotpassModel 