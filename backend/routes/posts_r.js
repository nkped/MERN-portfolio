import express from 'express'
import Post from '../models/post_m.js'


const router = express.Router()


//Get all posts
router.get('/', (req, res) => {
    res.json({mssg: "Get all posts"})
})


//Get One post
router.get('/:id', (req, res) => {
    res.json({mssg: "Get One post"})
})

//Create post
router.post('/', async (req, res) => {
    const { title, author, content } = req.body
    try {
        const post = await Post.create({ title, author, content })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


router.delete('/:id', (req, res) => {
    res.json({mssg: "Posts has been deleted"})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: " Post has been updated..."})
})

/*
router.get('/', (req, res) => {})
router.get('/', (req, res) => {})
router.get('/', (req, res) => {})
*/

export default router

