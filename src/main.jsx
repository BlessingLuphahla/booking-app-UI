import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ScreenProvider } from "./hooks/useScreen.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ScreenProvider>
        <App />
      </ScreenProvider>
    </Provider>
  </StrictMode>
);
