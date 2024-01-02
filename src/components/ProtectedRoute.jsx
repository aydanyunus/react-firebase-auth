import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      navigate("/register");
    }
  }, [currentUser, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
