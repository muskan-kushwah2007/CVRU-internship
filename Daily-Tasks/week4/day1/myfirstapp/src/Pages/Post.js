import { useParams } from 'react-router-dom';

function Post() {
    const { postId } = useParams();

    return (
        <div>
            <h1>Post Details</h1>
            <p>This is the post details page for post with ID: {postId}</p>
        </div>
    );
}

export default Post;