import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import LandingPage from './Pages/LandingPage.jsx';
import HomePage from './Pages/HomePage.jsx';
import CreatePost from './Pages/CreatePost'; // Ensure the correct import

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  //  // Saved posts state
  //  const [savedPosts, setSavedPosts] = useState([]);

  //  // Load saved posts from localStorage on component mount
  //  useEffect(() => {
  //    const saved = JSON.parse(localStorage.getItem('savedPosts')) || [];
  //    setSavedPosts(saved);
  //  }, []);
 
  //  // Update localStorage whenever savedPosts changes
  //  useEffect(() => {
  //    localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
  //  }, [savedPosts]);
 
  //  // Function to save a post
  //  const handleSavePost = (title, content, image) => {
  //    const newPost = { title, content, image };
  //    setSavedPosts((prevPosts) => [...prevPosts, newPost]); // Update state properly
  //  };

  // Fetching users from /users endpoint
  useEffect(() => {
    axios.get("http://localhost:8080/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []); // Runs once on component mount

  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
