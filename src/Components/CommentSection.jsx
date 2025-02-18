import React from "react";

const CommentSection = ({ comments, handleCommentSubmit }) => {
  return (
    <div className="mt-6 w-[300px] h-[300px]">
      {/* Comment form */}
      <form onSubmit={handleCommentSubmit}>
        <textarea
          name="comment"
          placeholder="Add a comment..."
          className="border p-2 rounded w-full mb-4"
        />
        <button type="submit" className="bg-indigo-500 text-white p-2 rounded">
          Post Comment
        </button>
      </form>

      {/* Display comments */}
      <div className="mt-4">
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="border-t pt-2 mt-2 text-black">
              <p>{comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
