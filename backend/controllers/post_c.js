import Post from '../models/post_m.js'
import mongoose from 'mongoose'


//Get All posts
export const getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find({}).sort({timestamps: -1})
        res.status(200).json(allPosts)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//Get One post
export const getOnePost = async (req, res) => {
const objectId = req.params.id
    if (!mongoose.Types.ObjectId.isValid(objectId))
        return res.status(404).json({error: 'Post findes ikke...'}) 
      
        try {
          const postById = await Post.findById(objectId)
          res.status(200).json(postById)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }

//Create post
export const createPost = async (req, res) => {
    const { title, author, content } = req.body
    try {
        const post = await Post.create({ title, author, content })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }}
    
    


    //Update One post
//Delete One post





    