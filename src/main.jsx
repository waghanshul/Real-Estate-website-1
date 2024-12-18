import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core"; // Import MantineProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-va23jadul8swqxse.us.auth0.com"
      clientId="vEZhjWibQPbPPyyCelRoFCLwQRTCDotH"
      authorizationParams={{
        redirect_uri: "http://localhost:5173",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <MantineProvider withGlobalStyles withNormalizeCSS> {/* Wrap your app with MantineProvider */}
        <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
);
