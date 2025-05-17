import React, { useState } from "react";
import Login from "../../assets/Login.jpg";
import { Link } from "react-router-dom";
import SignUpForm from "../auth/Signup";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Placeholder for image/logo */}
        <div className="w-full h-32 bg-blue-100 flex items-center justify-center rounded">
          <img src={Login} alt="Logo" className="h-30 w-50 object-contain" />
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome!</h2>
        </div>

        <form className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg pr-10 focus:outline-none"
            />
            <span
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              👁️
            </span>
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 font-medium">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

          <p className="text-sm text-center text-gray-600">
            Not a member?{" "}
            <Link to="/signup" className="text-blue-600 font-medium">
              Register now
            </Link>
          </p>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-2 text-gray-400 text-sm">Or continue with</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="bg-red-600 text-white rounded-full p-2">G</button>
          <button className="bg-black text-white rounded-full p-2">●</button>
          <button className="bg-blue-600 text-white rounded-full p-2">f</button>
        </div>
      </div>
    </div>
  );
}
