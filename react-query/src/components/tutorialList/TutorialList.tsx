import React from "react";
import { useQuery } from "react-query";
import tutorialSevice from "../../services/TutorialService";
import SingleTutorial from "../singleTutorial/SingleTutorial";

const TutorialList = () => {
  const { data: allTutorial, isLoading } = useQuery("Alltutorial", () =>
    tutorialSevice.findAll()
  );
  if (isLoading) {
    return (
      <div>
        <p>this is loading.............</p>
      </div>
    );
  }
  return (
    <div>
      {allTutorial?.data.map((item: itemTypes) => (
        <SingleTutorial singleItem={item} key={item.id} />
      ))}
    </div>
  );
};

export default TutorialList;
export interface itemTypes {
  id: string;
  completed: boolean;
  description: string;
}
