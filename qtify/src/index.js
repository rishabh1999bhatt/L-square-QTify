import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import { MusicPlayerProvider } from "./context/music-player.context";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#34c94b",
    },
    secondary: {
      main: "#121212",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MusicPlayerProvider>
          <App />
        </MusicPlayerProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
