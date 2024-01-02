import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const UpdateProfile = () => {
  const passwordRef = useRef();
  const confPasswordRef = useRef();
  const { currentUser, updateUserPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setError('')
    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.error("Error updating profile:", e);

        setError("Failed to update profile");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <h1 className="text-4xl font-medium text-gray-700 mb-9">
        Update Profile
      </h1>
      <form
        className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 w-2/4"
        onSubmit={handleUpdate}
      >
        {error && (
          <div className="bg-red-200 mb-4 text-red-600 text-sm font-medium p-3 rounded-md">
            {error}
          </div>
        )}
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
            placeholder="Leave blank to keep same password"
            ref={passwordRef}
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
            placeholder="Leave blank to keep same password"
            ref={confPasswordRef}
          />
        </div>
        <div className="flex items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
          <button className="ml-4 bg-white  text-blue-500 border-blue-500 border font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <Link to="/">Cancel</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
