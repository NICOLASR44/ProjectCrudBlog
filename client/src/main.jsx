import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import ManageArticle from "./pages/ManageArticle";
import RedirectAfterCreation from "./components/RedirectAfterCreation";
import ViewArticle from "./pages/ViewArticle";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

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
  {
    path: "/article/:id",
    element: <ViewArticle />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
