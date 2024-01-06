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
import Leaderboard from "../pages/LeaderBoardPage.jsx";
import Quiz from "./components/Quiz/quiz.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/new-game" element={<Quiz />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
