// Task 2: Display Posts Dynamically on Render
import { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {   
        async function fetchPosts() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPosts(data.slice(0, 10)); // Display only the first 10 posts
        }

        fetchPosts();
    }, []);

    return (    
        <div style={{ padding: "20px" }}>
            <h2>Posts</h2>
            {posts.map((post) => (
                <div key={post.id} style={ box}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );  
}

const box = {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};
   

export default Posts;