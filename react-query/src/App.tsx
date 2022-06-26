import React, { useEffect } from "react";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <p>hello to react-query</p>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/alltutorials" element={<TutorialList />} />
          <Route path="/tutorialform" element={<Form />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
