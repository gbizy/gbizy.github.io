import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import MyWork from "./pages/MyWork.tsx";
import Contact from "./pages/Contact.tsx";

const router = createBrowserRouter([
  {
    path: ".",
    element: <App />,
    children: [
      {
        path: ".",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/mywork",
        element: <MyWork />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
