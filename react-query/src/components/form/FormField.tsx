import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useMutation } from "react-query";
// import Tutorial from "../types/Tutorial";

const FormField: React.FC = () => {
  const mutation = useMutation((description) => {
    return axios.post("/todos", description);
  });
  const [des, setDescription] = useState("");

  const handleForm = (e: any) => {
    e.preventDefault();

    mutation.mutate();
    setDescription("");
  };
  return (
    <div>
      <>form</>
      <form onSubmit={handleForm}>
        <label>description:</label>
        <input
          value={des}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <Button type="submit">submit</Button>
      </form>
    </div>
  );
};

export default FormField;
interface descType {
  description: string;
}
