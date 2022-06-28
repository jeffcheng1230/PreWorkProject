import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";

// routing imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import the component pages
import RecipePage from "./pages/recipePage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import HomePage from "./pages/homePage";
import RequireAuth from "./components/RequireAuth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";

export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  });

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/recipe"
            element={
              <RequireAuth user={user}>
                <RecipePage/>
              </RequireAuth>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
