import React from "react";
import "bootstrap/dist/css/bootstrap.css";

// routing imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import the component pages
import RecipePage from "./pages/recipePage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import HomePage from "./pages/homePage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
