import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ isDarkTheme }) => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ysvdv7l", // Replace with your EmailJS Service ID
        "template_gikwn78", // Replace with your EmailJS Template ID
        form.current,
        "5iw8UBbjMP9a6ebuF" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: isDarkTheme ? "dark" : "light",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: isDarkTheme ? "dark" : "light",
          });
        }
      );
  };

  return (
    <div
      className={`min-h-screen w-full ${
        isDarkTheme ? "bg-[#0d081f] text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div
        className={`max-w-4xl mx-auto px-6 py-16 rounded-lg shadow-lg ${
          isDarkTheme ? "bg-[#131025] text-white" : "bg-white text-black"
        }`}
      >
        <h1
          className={`text-5xl font-bold mb-6 text-center ${
            isDarkTheme ? "text-pink-400" : "text-pink-600"
          }`}
        >
          Contact <span className={isDarkTheme ? "text-white" : "text-gray-900"}>Us</span>
        </h1>

        <p
          className={`text-lg mb-6 text-center ${
            isDarkTheme ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Have questions or want to get in touch? Fill out the form below, and we’ll get back to you as soon as possible!
        </p>

        <div
          className={`mt-8 w-full p-6 rounded-lg shadow-lg border ${
            isDarkTheme
              ? "bg-[#1a172b] text-white border-gray-700"
              : "bg-white text-black border-gray-300"
          }`}
        >
          <h3
            className={`text-xl font-semibold text-center ${
              isDarkTheme ? "text-white" : "text-gray-900"
            }`}
          >
            Connect With Us <span className="ml-1">🚀</span>
          </h3>

          <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className={`w-full p-3 rounded-md border focus:outline-none ${
                isDarkTheme
                  ? "bg-[#1a172b] text-white border-gray-600 focus:border-purple-500"
                  : "bg-gray-100 text-black border-gray-300 focus:border-purple-700"
              }`}
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className={`w-full p-3 rounded-md border focus:outline-none ${
                isDarkTheme
                  ? "bg-[#1a172b] text-white border-gray-600 focus:border-purple-500"
                  : "bg-gray-100 text-black border-gray-300 focus:border-purple-700"
              }`}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className={`w-full p-3 rounded-md border focus:outline-none ${
                isDarkTheme
                  ? "bg-[#1a172b] text-white border-gray-600 focus:border-purple-500"
                  : "bg-gray-100 text-black border-gray-300 focus:border-purple-700"
              }`}
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>

        <div className="mt-10 text-center">
          <Link to="/">
            <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition duration-300">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;