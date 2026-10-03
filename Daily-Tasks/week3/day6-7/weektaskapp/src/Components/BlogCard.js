import { useState } from "react";

function BlogCard({ title, author, date, description }) {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="blog-card">

            <h2>{title}</h2>

            <p className="blog-info">
                By {author} | {date}
            </p>

            <p>{description}</p>

            <button
                className="read-btn"
                onClick={() => setShowDetails(!showDetails)}
            >
                {showDetails ? "Hide Details" : "Read More"}
            </button>

            {showDetails && (
                <p className="details">
                    This is the detailed content of the blog post.
                    Here you can read more information about this topic.
                </p>
            )}

        </div>
    );
}

export default BlogCard;