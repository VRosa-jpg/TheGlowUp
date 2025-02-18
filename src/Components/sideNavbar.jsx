import React from 'react';
import { FaUserAlt, FaBookmark, FaSignOutAlt, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SideNavbar = ({ user, savedPosts }) => { // Receive user prop
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('userID');
    localStorage.removeItem('email');
    navigate('/login'); // Redirect to login page after logout
  };

  const handleCreatePost = () => {
    navigate('/create-post'); // Navigate to the create post page
  };

  const username = user?.name || 'Guest'; // Use the passed username or default to 'Guest'
  const profilePic = user?.profilePic || 'path/to/default/profile.jpg'; // Use passed profile pic or default image

  return (
    <div className="w-64 h-screen bg-[#e9a1ce] text-white p-4 flex flex-col justify-between">
      {/* User Profile Section */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
          {profilePic ? (
            <img src={profilePic} alt="" className="w-full h-full object-cover rounded-full" />
          ) : (
            <FaUserAlt className="text-xl" />
          )}
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{username}</h2> {/* Display username */}
        </div>
      </div>

      {/* Saved Posts Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Saved Posts</h3>
        <ul>
          {/* <li className="flex items-center space-x-2 py-2 hover:bg-gray-700 px-3 rounded">
            <FaBookmark />
            <span>Post 1</span>
          </li>
          <li className="flex items-center space-x-2 py-2 hover:bg-gray-700 px-3 rounded">
            <FaBookmark />
            <span>Post 2</span>
          </li>
          <li className="flex items-center space-x-2 py-2 hover:bg-gray-700 px-3 rounded">
            <FaBookmark />
            <span>Post 3</span>
          </li> */}

          {savedPosts && savedPosts.length > 0 ? (
            savedPosts.map((post, index) => (
              <li key={index} className="flex items-center space-x-2 py-2 hover:bg-gray-700 px-3 rounded">
                <FaBookmark />
                <span>{post.title}</span>
              </li>
            ))
          ) : (
            <li>No saved posts</li>
          )}
        </ul>
      </div>

      {/* Create Post Button */}
      <div className="mt-6">
        <button
          className="w-full py-2 bg-indigo-500 hover:bg-pink rounded text-white flex items-center justify-center space-x-2"
          onClick={handleCreatePost} // Navigate to Create Post page
        >
          <FaPlus />
          <span>Create Post</span>
        </button>
      </div>

      {/* Logout Button */}
      <div className="mt-auto">
        <button
          className="w-full py-2 bg-indigo-500 hover:bg-pink rounded text-white flex items-center justify-center space-x-2"
          onClick={handleLogout} // Trigger logout function
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default SideNavbar;

