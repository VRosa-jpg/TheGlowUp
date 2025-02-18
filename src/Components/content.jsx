import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaComment, FaBookmark, FaTimes } from "react-icons/fa";
import CommentSection from './CommentSection';  // Import the CommentSection component

const BlogReel = ({ title, content, image }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);  // Saved state
  const [expanded, setExpanded] = useState(false);
  const [showComments, setShowComments] = useState(false);  // State to toggle comment visibility
  const [comments, setComments] = useState([]); // Store comments

  // Limit content preview to first 150 characters
  const previewLength = 400;
  const isLong = content.length > previewLength;
  const displayedContent = expanded ? content : `${content.slice(0, previewLength)}...`;

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    if (comment) {
      setComments([...comments, comment]);
      e.target.comment.value = ""; // Clear the input field after submission
    }
  };

  const handleSave = () => {
    setSaved(!saved);
    onSave(title, content, image); // Call the parent function to save the post
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-full max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden p-6 mt-20 mb-20 border border-indigo-500 border-8 bg-white">
        {/* Image */}
        <img src={image} alt="Blog Post" className="w-full h-[350px] object-cover rounded-lg" />
        <div className="p-4">
          {/* title */}
          <h3 className="alfa-slab-one-regular text-black font-bold mb-3">{title}</h3>
          {/* content */}
          <p className="text-gray-700 text-lg">{displayedContent}</p>
          {/* Extra */}
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-indigo-500 font-bold mt-2"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>

      {/* Buttons positioned to the lower-right corner */}
      <div className="absolute bottom-5 right-10 space-y-4">
        {/* Liked */}
        <button
          className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-600 border-2 border-gray-300 hover:bg-gray-200"
          onClick={() => setLiked(!liked)}
        >
          <span className="text-2xl">
            {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          </span>
        </button>

        {/* Comments */}
        <button
          onClick={() => setShowComments(!showComments)}  // Toggle comment section visibility
          className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-600 border-2 border-gray-300 hover:bg-gray-200"
        >
          <span className="text-2xl">
            <FaComment />
          </span>
        </button>

        {/* Saved */}
        <button 
          className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-600 border-2 border-gray-300 hover:bg-gray-200"
          // onClick={() => setSaved(!saved)}
          onClick={handleSave}
        >
          <span className="text-2xl">
            {saved ? <FaBookmark className="text-indigo-500" /> : <FaBookmark />}
          </span>
        </button>
      </div>

       {/* Conditionally render CommentSection as an overlay */}
       {showComments && (
        <div className="backdrop-blur fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center">
          <div className="relative bg-white p-6 rounded-lg shadow-lg z-30">
            <CommentSection comments={comments} handleCommentSubmit={handleCommentSubmit} />
            <FaTimes className="absolute top-2 right-2 text-indigo-500 text-2xl cursor-pointer" onClick={() => setShowComments(false)}/>

          </div>
        </div>
      )}
    </div>
  );
};

export default BlogReel;
