import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Body from "./components/body";
import Nav from "./components/nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/contact";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <>
      <main>
        <Nav />
        <Body />
      </main>
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
