import React from "react";
// import "../index.css";

const LikeButton = ({ isLiked, onLike }) => {
  return (
    <button
      className={`like-button ${isLiked ? "liked" : ""}`}
      onClick={onLike}
    >
      {isLiked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;
