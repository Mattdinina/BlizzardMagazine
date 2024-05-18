import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from "./pages/register";
import Login from "./pages/Login";
import Accueil from "./pages/accueil";
import Artistes from "./pages/artistes";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="accueil" element={<Accueil />} />
        <Route path="artistes" element={<Artistes />} />
      </Routes>
    </BrowserRouter>


  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Home />
  </>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
