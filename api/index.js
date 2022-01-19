import express from "express"
import connectDB from "./db/connectdb.js"
import web from "./routes/web.js"
import login from "./routes/login.js"
import auth from "./routes/auth.js"
import userRoute from "./routes/users.js"
import postRoute from "./routes/posts.js"
import categoryRoute from "./routes/categories.js"
import multer from "multer"
import cors from 'cors';
import path from "path"

const __dirname = path.resolve();

const app=express()
app.use(cors())
const port=process.env.PORT || '8000'
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017";
//database connection
connectDB(DATABASE_URL);
//json
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images");
    },filename:(req,file,cb)=>{
        cb(null,req.body.name);
    },
});


const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded")
})







//load routes
app.use("/student",web)
// app.use("/login",login)
app.use("/api/auth",auth)
app.use("/api/users",userRoute)
app.use("/api/post",postRoute)

app.use("/api/category",categoryRoute)

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
})