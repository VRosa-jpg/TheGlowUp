import React, { useEffect, useState } from 'react';
import SideNavbar from '../Components/sideNavbar';
import Content from '../Components/content';
import Loading from '../Components/Loading'; 
import '../Homepage.css'; // Adjust the path if necessary


const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const username = localStorage.getItem('username') || 'Guest';
  const profilePic = 'path/to/profile.jpg'; 

  useEffect(() => {
    const fetchPosts = async () => {
      // Fake loading delay - 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000)); 

      try {
        const response = await fetch('http://localhost:8080/posts/');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        console.log('Fetched posts:', data);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchPosts();
  }, []); 

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex h-screen">
      <SideNavbar user={{ name: username, profilePic: profilePic }} />

      <div className="flex-1 overflow-y-scroll snap-y snap-mandatory main-content">
        {posts.length > 0 ? (
          [...posts].reverse().map((post) => (
            <div 
              key={post.id} 
              className={`h-screen snap-start flex items-center justify-center post-slide-0`}
            >
              <Content
                title={post.title}
                image={post.imageUrl || 'default-image-path.jpg'}
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
