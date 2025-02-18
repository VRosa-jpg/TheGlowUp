import React from 'react';
import { Link } from 'react-router-dom';
import BlogReel from '../Components/content'; // Use BlogReel instead of Content
import '../Homepage.css';
import NavBar from '../Components/navbar';

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto snap-y snap-mandatory main-content">
        <div className="h-screen snap-start flex items-center justify-center">
          <BlogReel 
            title="THE SIX MONTH GLOW UP" 
            image="/BlogPic_1.jpeg" 
            content="Eating better has a huge impact on our overall well-being, and it's more than just about looking good. When we fuel our bodies with nutritious foods, we give ourselves the energy and mental clarity we need to feel good emotionally. Balanced meals that include vitamins, minerals, and healthy fats help stabilize mood swings, reduce stress, and promote a positive outlook on life. This is because our brain thrives on nutrients, and when we give it the right fuel, it works at its best. Our skin also shows the benefits of a healthy diet. A diet rich in antioxidants, vitamins A, C, and E, as well as omega-3 fatty acids, can help reduce acne, prevent signs of aging, and promote a healthy glow. By cutting out processed foods and excess sugar, we reduce inflammation, which is often a cause of skin issues."
          />
        </div>

        <div className="h-screen snap-start flex items-center justify-center">
          <BlogReel 
            title="THE SIX MONTH GLOW UP" 
            image="/BlogPic_1.jpeg" 
            content="Eating better has a huge impact on our overall well-being, and it's more than just about looking good. When we fuel our bodies with nutritious foods, we give ourselves the energy and mental clarity we need to feel good emotionally. Balanced meals that include vitamins, minerals, and healthy fats help stabilize mood swings, reduce stress, and promote a positive outlook on life. This is because our brain thrives on nutrients, and when we give it the right fuel, it works at its best. Our skin also shows the benefits of a healthy diet. A diet rich in antioxidants, vitamins A, C, and E, as well as omega-3 fatty acids, can help reduce acne, prevent signs of aging, and promote a healthy glow. By cutting out processed foods and excess sugar, we reduce inflammation, which is often a cause of skin issues."
          />
        </div>

        {/* Exclusive Offer Block */}
        <div className="h-screen snap-start flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white z-10">
              <h2 className="text-3xl font-bold mb-4">Want to View This Content?</h2>
              <p className="text-lg mb-6">Sign up to access exclusive content and more!</p>
              <Link to="/login">
                <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
                  Sign Up Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

