import React, { useState, useEffect, use } from "react";
import axios from "axios";
const feed = () => {
  const [posts, setposts] = useState([
    {
      _id: "1",
      image:
        "https://images.unsplash.com/photo-1790326880688-9eae7aea1dfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
      caption: "beautiful view",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((response) => {
      console.log(response.data);
      setposts(response.data.posts);
    });
  }, []);

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No posts available.</h1>
      )}
    </section>
  );
};

export default feed;
