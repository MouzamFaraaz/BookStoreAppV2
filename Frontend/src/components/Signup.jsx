import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup({ isDarkTheme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      console.log("Response Data:", res.data);
      if (res.data) {
        toast.success("Signup Successfully");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (err.response) {
        console.error("Error Response:", err.response);
        toast.error("Error: " + err.response.data.message);
      } else {
        console.error("Error:", err);
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div
      className={`flex h-screen items-center justify-center ${
        isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div
        className={`w-[600px] p-6 rounded-lg shadow-lg ${
          isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* Close Button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg mb-4">Signup</h3>

          {/* Full Name */}
          <div className="mt-4 space-y-2">
            <span
              className={`${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Name
            </span>
            <br />
            <input
              type="text"
              placeholder="Enter your fullname"
              className={`w-full px-3 py-2 border rounded-md outline-none ${
                isDarkTheme
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
              {...register("fullname", { required: true })}
            />
            <br />
            {errors.fullname && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Email */}
          <div className="mt-4 space-y-2">
            <span
              className={`${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email
            </span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-3 py-2 border rounded-md outline-none ${
                isDarkTheme
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Password */}
          <div className="mt-4 space-y-2">
            <span
              className={`${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Password
            </span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className={`w-full px-3 py-2 border rounded-md outline-none ${
                isDarkTheme
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Button */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
            >
              Signup
            </button>
            <p
              className={`text-sm ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Have an account?{" "}
              <button
                className="underline text-blue-500 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              <Login />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;