import express from 'express';
import User from '../models/User.js';

import Post from '../models/Post.js';
import Category from '../models/Category.js'
const router = express.Router();
//create categories
router.post("/",async(req,res)=>{
    const newCat= new Category(req.body);
    try {
        const savedCat=await newCat.save()
        res.status(200).json(savedCat)
    } catch (error) {
        res.status(500).json(error)
    }
})
//display all categories

router.get("/",async(req,res)=>{
  
    try {
       const cats=await Category.find()
        res.status(200).json(cats)
    } catch (error) {
        res.status(500).json(error)
    }
})




export default router
