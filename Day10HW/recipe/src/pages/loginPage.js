import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase/firebase";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn(e) {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      navigate("/recipe");
    } catch (e) {
      throw e;
    }
  }

  return (
    <div>
      <div className="card p-4 text-center">
        <h1> Sign in with email and password</h1>
        <form>
          <div className="input-group">
            Email
            <input
              className="w-100 m-3"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            Password
            <input
              className="w-100 m-3"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => signIn(e)}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
