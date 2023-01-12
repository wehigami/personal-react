import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./pages/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Notes from './pages/notes-app';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/notes" element={<Notes />}/>
      </Routes>
    </BrowserRouter>
  </Provider>
);
