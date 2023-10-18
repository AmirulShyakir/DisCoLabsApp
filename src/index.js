import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import TopicsJoined from "./routes/TopicsJoined";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import PostDetails from "./routes/PostDetails";
import CreatePost from "./routes/CreatePost";
import Navbar from "./components/Navbar";
import "./App.css";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "topics",
        element: <TopicsJoined />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "post-details",
        element: <PostDetails />,
      },
      {
        path: "createPost",
        element: <CreatePost />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
