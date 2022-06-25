import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import tutorialSevice from "./services/TutorialService";

function App() {
  useEffect(() => {
    const data = tutorialSevice.findAll();
    console.log("the data is=========", data);
  }, []);
  return (
    <div className="App">
      <p>hello world</p>
    </div>
  );
}

export default App;
