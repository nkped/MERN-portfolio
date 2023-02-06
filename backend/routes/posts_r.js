import express from 'express'
import { createPost, getOnePost, getAllPosts, deletePost, updatePost } from '../controllers/post_c.js'



const router = express.Router()


//Get all posts
router.get('/', getAllPosts)


//Get One post
router.get('/:id', getOnePost)

//Create post
router.post('/', createPost)


router.delete('/:id', deletePost)

router.patch('/:id', updatePost)

/*
router.get('/', (req, res) => {})
router.get('/', (req, res) => {})
router.get('/', (req, res) => {})
*/

export default router

