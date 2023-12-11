import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import WelcomePage from "../pages/WelcomePage.jsx";
import App from "./app.jsx";
import NewGame from "../pages/NewGamePage.jsx";
import Leaderboard from "../pages/LeaderBoardPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/new-game" element={<NewGame />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
