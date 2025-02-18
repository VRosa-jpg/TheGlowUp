import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CreatePost.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userID'); // Retrieve userId from localStorage

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('imageUrl', image); // Optional image URL
    formData.append('userId', userId); // User ID from localStorage

    try {
      // Send POST request to Spring Boot backend
      const response = await axios.post('http://localhost:8080/posts/createPost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data); // Log the response from backend

      // After the post is created, navigate to the homepage with the user still logged in
      navigate('/homepage');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };



  const handleImageChange = (e) => {
    const value = e.target.value;
    console.log("this is the " + value);
    setImage(value);
  }
  return (
  <div className='h-full min-h-screen flex justify-center items-center bg-gradient-to-b from-[#381032] via-[#9f4a9f] to-[#e39fe3]'>
  <section className="max-w-sm rounded overflow-hidden shadow-lg bg-[url('/HomepageFluffy.png')] rounded pb-2 pt-0">
    <form onSubmit={handleSubmit}>
      <label className='alfa-slab-one-regular'>Create a post</label>

      <div className="input-box">
        <h2 className='alfa-slab-one-regular'>Title</h2>
        <input
          type="text"
          className="feild p-3 bg-white text-gray-500"
          placeholder="Enter Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="input-box">
        <h2 className='alfa-slab-one-regular'>Image URL</h2>
        <div className="field-file-wrapper">
          <input
            id="image"
            type="text"
            placeholder="Enter image URL"
            className="field p-3 bg-white text-gray-500"
            onChange={handleImageChange}
            required
          />
        </div>
      </div>

      <div className="input-box">
  <h2 className='alfa-slab-one-regular'>Content</h2>
  <textarea
    className="feild mess bg-white w-[225px] h-[100px] p-2 rounded text-gray-500"
    placeholder="Enter content"
    value={content}
    onChange={(e) => setContent(e.target.value)}
    required
  ></textarea>
</div>


      <button >Submit Post</button>
    </form>
  </section>
</div>

  );
};

export default CreatePost;
