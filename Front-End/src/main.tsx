import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";

import { FavoritesProvider } from "./components/FavoritesContext";
import { CartProvider } from "./components/CartContext";
import { ToastProvider } from "./components/ToastContext";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <CartProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </CartProvider>
    </ToastProvider>
  </StrictMode>
);