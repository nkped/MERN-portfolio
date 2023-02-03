import Post from '../models/post_m.js'






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
    try {
    const postById = await Post.findById(req.params.id)
    res.status(200).json(postById)
} catch (error) {
    res.status(400).json({error: error.message})
}
}


/*
if (!postById) {
    return res.status(400).json({error: error.message})
}
*/


//Create post
export const createPost = async (req, res) => {
    const { title, author, content } = req.body
    try {
        const post = await Post.create({ title, author, content })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }}
    
    








    