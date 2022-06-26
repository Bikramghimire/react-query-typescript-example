import React from "react";
import { Button } from "react-bootstrap";
import FormField from "../form/FormField";
import TutorialList from "../tutorialList/TutorialList";

const Home = () => {
  return (
    <div className="container-sm">
      <>this is the home page</>
      <div className="border border-primary d-flex flex-row justify-content-evenly align-items-center">
        <div className="border border-success p-4">
          <TutorialList />
        </div>
        <div className="border border-success p-4">
          <FormField />
        </div>
      </div>
    </div>
  );
};

export default Home;
