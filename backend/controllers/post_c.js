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
const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({error: 'Post findes med pågældende id findes ikke...'}) 
      
        try {
          const postById = await Post.findById(id)
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
    
    
    //Delete One post

export const deletePost = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({error: 'Post med pågældende /"id/" ikke...'})

    try {
        const deletedPost = await Post.findByIdAndDelete({_id:id})
    res.status(200).json(deletedPost)
}
catch(error) {
    res.status(400).json({error: error.message})
}
}






    //Update One post





    