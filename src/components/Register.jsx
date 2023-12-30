import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-4xl font-medium text-gray-700 mb-9">Sign Up</h1>
      <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 w-2/4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="passwordconf"
          >
            Password Confirmation
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="passwordconf"
            type="password"
            placeholder="Password Confirmation"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>

        <p className="mt-4 text-gray-700 font-medium text-base">
          Already have an account?
          <Link to="/login" className="ml-1 underline">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

