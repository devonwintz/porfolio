import React from "react";
import "./components/script";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
