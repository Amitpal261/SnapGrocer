import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App, { router } from "../app";
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);                      
