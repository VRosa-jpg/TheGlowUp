import React, { useEffect, useState } from 'react';
import SideNavbar from '../Components/sideNavbar';
import Content from '../Components/content';
import '../Homepage.css';

const HomePage = () => {
  const [posts, setPosts] = useState([]); // Store posts
  const username = localStorage.getItem('username') || 'Guest';
  const profilePic = 'path/to/profile.jpg'; // Replace with actual profile picture path

  // Fetch posts when the page loads
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8080/posts/'); // Ensure the correct endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        console.log('Fetched posts:', data); // Log the response to ensure you're getting the right data
        setPosts(data); // Set the posts state
        console.log(post.imageUrl)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div className="flex h-screen">
      <SideNavbar user={{ name: username, profilePic: profilePic }} />

      <div className="flex-1 overflow-y-scroll snap-y snap-mandatory main-content">
        {posts.length > 0 ? (
          [...posts].reverse().map((post) => (
            <div key={post.id} className="h-screen snap-start flex items-center justify-center">
              <Content
                title={post.title}
                image={post.imageUrl || 'default-image-path.jpg'} // Provide a fallback image if no imageUrl
                content={post.content}
              />
            </div>
          ))
        ) : (
          <div>No posts available.</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
