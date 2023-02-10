import PostDetails from '../components/PostDetails.js'
import { useEffect, useState } from "react"


const Home = () => {

    const [ post, setPost ] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch('/api/posts')
            const json = await response.json()
            
            if(response.ok) {
                setPost(json)
                console.log('setPost called...')
            } 
        }
        fetchPost()
    }, [])
    
    return (<div className="home">
        <div className="posts">
            {post && post.map((post) => (
        <PostDetails key={post._id} post={post} />
        ))}
        </div>
        </div>
)}


export default Home

