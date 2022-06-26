import React from "react";
import { itemTypes } from "../tutorialList/TutorialList";

const SingleTutorial: React.FC<Props> = ({ singleItem }) => {
  return (
    <div>
      <p>{singleItem.description}</p>
    </div>
  );
};

export default SingleTutorial;
interface Props {
  singleItem: itemTypes;
}
