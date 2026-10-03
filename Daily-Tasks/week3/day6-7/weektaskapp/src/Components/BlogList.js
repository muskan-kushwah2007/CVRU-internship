import { useState } from "react";
import BlogCard from "./BlogCard";

function BlogList() {

    const [search, setSearch] = useState("");

    const blogs = [
        {
            id: 1,
            title: "Introduction to React",
            author: "Muskan",
            date: "3 October 2026",
            description:
                "React is a JavaScript library used to build interactive user interfaces."
        },
        {
            id: 2,
            title: "Learning JavaScript",
            author: "Muskan",
            date: "4 October 2026",
            description:
                "JavaScript is a programming language used to create dynamic web applications."
        },
        {
            id: 3,
            title: "MERN Stack Development",
            author: "Muskan",
            date: "5 October 2026",
            description:
                "MERN Stack is used to build modern full-stack web applications."
        },
        {
            id: 4,
            title: "My React Learning Journey",
            author: "Muskan",
            date: "6 October 2026",
            description:
                "I am learning React components, props, state and dynamic rendering."
        }
    ];

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="blog-section" id="blogs">

            <h1>Latest Blogs</h1>

            <input
                type="text"
                placeholder="Search blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-box"
            />

            <div className="blog-container">

                {filteredBlogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        title={blog.title}
                        author={blog.author}
                        date={blog.date}
                        description={blog.description}
                    />
                ))}

            </div>

            {filteredBlogs.length === 0 && (
                <p className="no-results">
                    No blogs found.
                </p>
            )}

        </section>
    );
}

export default BlogList;