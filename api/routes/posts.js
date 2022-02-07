import express from 'express';
import User from '../models/User.js';

import Post from '../models/Post.js';
const router = express.Router();

//create new post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }

})

//update post

router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedPost)
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json("You can update your own post only")
        }
    } catch (error) {
        res.status(500).json(error)
    }

})

//delete post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete()
                res.status(200).json("post has deleted")
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json("You can delete only your own post only")
        }
    } catch (error) {
        res.status(500).json(error)
    }

})
//get post
router.get("/:id", async (req, res) => {

    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)

    }
})

//get all post
router.get("/", async (req, res) => {
    const username = req.query.user;  //based on usernm find post
    const catName = req.query.cat; //based on category find post
    try {
        let posts;                               //logic building
        if (username) {
            posts = await Post.find({ username })

        } else if (catName) {
            post = await Post.find({
                categories: {
                    $in: [catName]
                }
            })
        } else {
            posts = await Post.find().sort({"createdAt":1});
        }
        res.status(200).json(posts)

    } catch (error) {
        res.status(500).json(error)

    }
})






export default router
