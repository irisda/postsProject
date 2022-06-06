const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get("/", async (request, response) => {
    const getAllPosts = await Post.find({});

    try {
        response.send(getAllPosts);
    } catch (error) {
        response.status(500).send(error);
    }
});
//Create a new post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const savePost = await post.save();
        res.json(savePost)
    }
    catch (err) {
        res.json({ message: err })
    }


});

//get a specific post
router.get('/:postId', async(req, res) =>{
   const post = await Post.findById(req.params.postId);
   try{
       res.send(post)
   }
   catch(err){
       res.send({message: err})
   }
});

//delete a specifi post
router.delete('/:postId', async(req, res) =>{
const removedPost = await Post.deleteOne({
    _id: req.params.postId
})
try{
res.send(removedPost)
}
catch(err){
    res.send({message: err})
}
});

//Update
router.patch('/:postId', async (req,res) =>{
    const updatPost = await Post.updateOne({
        _id: req.params.postId
    },
    {
        $set:{title:req.body.title}
    }
    
    )
    try{
       res.json(updatPost) 
    }
    catch(err){
        res.send({message: err})
    }
})

module.exports = router;