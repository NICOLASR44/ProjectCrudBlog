import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import ManageArticle from "./pages/ManageArticle";
import RedirectAfterCreation from "./components/RedirectAfterCreation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/manage-article/:id",
    element: <ManageArticle />,
  },
  {
    path: "/manage-article",
    element: <ManageArticle />,
  },
  {
    path: "/redirect",
    element: <RedirectAfterCreation />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
