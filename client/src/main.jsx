import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { DogsProvider } from "./context/DogsContext";
import { DonationsProvider } from "./context/DonationsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DonationsProvider>
        <DogsProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </DogsProvider>
      </DonationsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
