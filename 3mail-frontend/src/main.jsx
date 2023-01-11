import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { MetaMaskProvider } from "metamask-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MetaMaskProvider>
      <App />
    </MetaMaskProvider>
  </BrowserRouter>
);
