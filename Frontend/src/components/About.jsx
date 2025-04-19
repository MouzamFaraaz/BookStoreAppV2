import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 bg-gray-50 dark:bg-[#0d081f] rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold mb-6 text-center text-pink-600 dark:text-pink-400">
        About <span className="text-gray-900 dark:text-white">Us</span>
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
        Welcome to <span className="font-semibold text-pink-500 dark:text-pink-400">bookStore</span> — your one-stop destination for discovering, exploring, and purchasing books.
      </p>

      <div className="text-md text-gray-600 dark:text-gray-400 space-y-4 text-justify leading-relaxed">
        <p>
          Whether you're a fiction fanatic, a non-fiction enthusiast, or someone curious to explore new genres, we have something for everyone. Our goal is to ignite your passion for reading and help you uncover your next favorite book.
        </p>

        <p>
          Our mission is to make books more accessible and engaging for readers of all ages. With a curated collection of both free and paid titles, we aim to bring the world of literature to your fingertips.
        </p>

        <p>
          This project is built with <strong>React</strong> for the frontend and leverages modern backend technologies like <strong>Node.js</strong> and <strong>MongoDB</strong> for scalability and performance. We’re constantly improving, so your feedback is always welcome!
        </p>
      </div>

      <div className="mt-10 text-center">
        <Link to="/">
          <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition duration-300">
            ← Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;