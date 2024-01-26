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
import App from "./App.jsx";
import Quiz from "./components/Quiz/quiz.jsx";
import QuizResults from "../pages/Quizresults.jsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/new-game" element={<Quiz />} />
      <Route path="/results" element={<QuizResults />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
