import React from "react";
import LikeButton from "./LikeButton";
import "../index.css";

const PostCard = ({ profileImage, username, content, isLiked, onLike }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={profileImage} alt={username} className="profile-pic" />
        <h3>{username}</h3>
      </div>
      <p className="post-content">{content}</p>
      <LikeButton isLiked={isLiked} onLike={onLike} />
    </div>
  );
};

export default PostCard;
