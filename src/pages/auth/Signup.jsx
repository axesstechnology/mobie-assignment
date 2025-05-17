import React, { useState } from "react";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <div className="text-left mb-6">
          <h2 className="text-2xl mb-2 font-semibold text-gray-900">Sign up</h2>
          <p className="text-gray-500 text-sm">
            Create an account to get started
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-400 bg-gray-100"
              placeholder="name@email.com"
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg pr-10 focus:outline-none"
                placeholder="Create a password"
              />
              <span
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                👁️
              </span>
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg pr-10 focus:outline-none"
                placeholder="Confirm password"
              />
              <span
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                👁️
              </span>
            </div>
          </div>

          <div className="flex items-start">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              checked={formData.agree}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
            />
            <label htmlFor="agree" className="ml-2 text-sm text-gray-700">
              I've read and agree with the{" "}
              <a href="#" className="text-blue-600 underline">
                Terms and Conditions
              </a>{" "}
              and the{" "}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
