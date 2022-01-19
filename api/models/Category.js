import mongoose from "mongoose";

const CategorySchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
       
    },  
},
{timestamps:true}
);


const CategoryModel = mongoose.model("category",CategorySchema)
//  mongooes.model("Post",postSchema)

export default CategoryModel
