// Components/Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-pink-100">
      <div className="w-16 h-16 border-4 border-pink-300 border-t-pink-600 rounded-full animate-spin"></div>
      <h1 className="mt-4 text-xl font-semibold text-pink-600 animate-pulse">
        Loading your glow-up journey...
      </h1>
    </div>
  );
};

export default Loading;

