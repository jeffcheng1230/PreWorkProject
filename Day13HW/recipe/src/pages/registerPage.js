import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase/firebase";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registering, setRegistering] = useState(false);

  async function signUp(e) {
    e.preventDefault();

    try {
      setRegistering(true);
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setRegistering(false);
      navigate("/recipe");
    } catch (e) {
      setRegistering(false);
      throw e;
    }
  }

  return (
    <div>
      <div className="card p-4 text-center">
        <h1> Register with email and password</h1>
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
              onClick={(e) => signUp(e)}
            >
              Register
              {registering ? (
                <div className="spinner-border" role="status"></div>
              ) : (
                ""
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
