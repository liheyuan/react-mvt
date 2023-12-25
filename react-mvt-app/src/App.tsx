import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NewsList } from "./pages/news-list";
import { LoginPage } from "./pages/login";

function App() {
  return (
    <div className="App">
      <LoginPage />
      {/* <NewsList /> */}
    </div>
  );
}

export default App;
