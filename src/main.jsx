import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import LoginPage from "../pages/LoginPage.jsx";
import App from "./app.jsx";
import WelcomePage from "../pages/WelcomePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<LoginPage />}></Route>)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
