



const PostDetails = ({post}) => {
return (
    <div className="post-details">
        <h4>{post.title}</h4>
        <p><strong>Skrevet af: </strong>{post.author}</p>
        <p><strong>Intro: </strong>{post.intro}</p>
        <p>{post.createdAt}</p>
    </div>
)
}


export default PostDetails