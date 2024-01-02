import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {currentUser, logout} = useAuth()
  const navigate = useNavigate()

  const handleLogout = async (e)=> {
    e.preventDefault();
    await logout();
    navigate('/login')
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <div className="w-2/4 border rounded-xl bg-white px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl font-medium text-center">Profile</h2>
        <p className="text-lg mt-4">
          <span className="font-medium capitalize mr-2">email:</span>
          {currentUser?.email}
        </p>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline capitalize"
        >
          Update Profile
        </button>
      </div>
      <button
        type="submit"
        className="mt-4 text-blue-500 border border-blue-500 bg-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline capitalize"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
};

export default Home;
