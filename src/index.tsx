import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes } from "./container/Routes";
import reportWebVitals from "./reportWebVitals";
import { Layout } from "./components/Layout";
import { GroupProvider } from "./context/groups";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <GroupProvider>
    <Layout>
      <Routes />
    </Layout>
  </GroupProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
