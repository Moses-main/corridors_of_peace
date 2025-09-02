import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// Import Inter font from Google Fonts
const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

// Check if the root element exists before rendering
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Failed to find the root element. Make sure you have a div with id='root' in your HTML file."
  );
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
