import React, { useState } from "react";
import PostCard from "./components/postcard";
import "../src/app.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      profileImage:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      username: "Alice",
      content: "Woohoo! This is Me Alice Yadav.",
      isLiked: false,
    },
    {
      id: 2,
      profileImage:
        "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
      username: "Boby Deol",
      content: "Loving this social media app.",
      isLiked: true,
    },
    {
      id: 3,
      profileImage:
        "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
      username: "charlie",
      content: "Just another day...",
      isLiked: false,
    },
  ]);

  // Function to toggle like status
  const handleLikeToggle = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, isLiked: !post.isLiked } : post
      )
    );
  };

  return (
    <div className="app">
      <h1>Social Media Feed</h1>
      <div className="post-list">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            profileImage={post.profileImage}
            username={post.username}
            content={post.content}
            isLiked={post.isLiked}
            onLike={() => handleLikeToggle(post.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
