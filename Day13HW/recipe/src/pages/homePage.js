import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card p-3">
        <button
          className="btn btn-primary m-3"
          onClick={(e) => navigate("/register")}
        >
          Register
        </button>
        <button
          className="btn btn-primary m-3"
          onClick={(e) => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}
