
import { useEffect, useState } from "react"


const Home = () => {

    const [ post, setPost ] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch('/api/posts')
            const json = await response.json()
            
            if(response.ok) {
                setPost(json)
                console.log('setpost called')
            } 
        }
        fetchPost()
    }, [])
    return <div className="home">

        <h2>Hello homepage!...</h2>
<div className="posts">
{ post && post.map((post) => (
   <p key={post._id}>{post.title}</p>
))}
</div>

    </div>
}


export default Home