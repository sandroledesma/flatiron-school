/*
Phase 2 -> Routing
by Sakib Rasul | Updated February 7, 2024 | Created June 23, 2023

Core Deliverables
1. Install React Router (a project requirement) and Tailwind CSS (an optional approach to styling).
2. Create a root layout and three nested routes.
   a. Add a <nav> to the root and render the other routes in an outlet.
3. (Optional) Handle errors with a custom component.
4. GET resources from your backend, and hold them in state. Optionally formulate your fetch() in a loader.
5. Pass props down to a form with controlled inputs.
   a. On submit, POST to your backend, and update state.
*/

// Create React App
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Tailwind CSS (along with ../tailwind.config.js)
import "./index.css";

// React Router 
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Components
import Welcome from "./welcome";
import Teas from "./routes/teas";
import About from "./routes/about";
import Root from "./routes/root";
import Error from "./error";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />, 
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Welcome />
        },
        {
          path: "teas",
          element: <Teas />,
          loader: async () => {return fetch("http://localhost:3000/teas").then(response => response.json())}
        }, 
        {
          path: "about",
          element: <About />
        }
      ]
   }
  ]); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
