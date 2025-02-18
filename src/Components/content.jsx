import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaComment, FaBookmark, FaTimes, FaUserAlt } from "react-icons/fa";
import CommentSection from './CommentSection';  // Import the CommentSection component




const BlogReel = ({ title, content, image, user }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const previewLength = 400;
  const isLong = content.length > previewLength;
  const displayedContent = expanded ? content : `${content.slice(0, previewLength)}...`;

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    if (comment) {
      setComments([...comments, comment]);
      e.target.comment.value = "";
    }
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  // Get the user details
  const username = user?.name || "Guest";
  const profilePic = user?.profilePic || "path/to/default/profile.jpg";
  
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-full max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden p-6 mt-20 mb-20 border border-indigo-500 border-8 bg-white">
        <img src={image} alt="Blog Post" className="w-full h-[350px] object-cover rounded-lg" />
        <div className="p-4">
          <h3 className="alfa-slab-one-regular text-black font-bold mb-3">{title}</h3>
          <p className="text-gray-700 text-lg">{displayedContent}</p>
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

      {/* Buttons */}
      <div className="absolute bottom-[45px] right-[-75px] space-y-4">
        <button
          className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-600 border-2 border-gray-300 hover:bg-gray-200"
          onClick={() => setLiked(!liked)}
        >
          <span className="text-2xl">{liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-600 border-2 border-gray-300 hover:bg-gray-200"
        >
          <span className="text-2xl">
            <FaComment />
          </span>
        </button>

        <button
          onClick={handleSave}
          className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-600 border-2 border-gray-300 hover:bg-gray-200"
        >
          <span className="text-2xl">
            {saved ? <FaBookmark className="text-indigo-500" /> : <FaBookmark />}
          </span>
        </button>
      </div>

      {/* Comment Section Overlay */}
      {showComments && (
        <div className="backdrop-blur fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center">
          <div className="relative bg-white p-6 rounded-lg shadow-lg z-30">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                {profilePic ? (
                  <img src={profilePic} alt="" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <FaUserAlt className="text-xl text-white" />
                )}
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-black">{username}</h2>
              </div>
            </div>

            <CommentSection comments={comments} handleCommentSubmit={handleCommentSubmit} />
            <FaTimes
              className="absolute top-2 right-2 text-indigo-500 text-2xl cursor-pointer"
              onClick={() => setShowComments(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogReel;
