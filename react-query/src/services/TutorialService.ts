import axios from "axios";
import Tutorial from "../types/Tutorial";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmI2YjhiMmE1YjU3MDAwMTczODAwOTAiLCJpYXQiOjE2NTYxNDIwMDN9.2smk4QW-g2SQhLQUxUZWd-GIW28SSvvScFhd7x3sWQE";
const apiClient = axios.create({
  baseURL: "https://api-nodejs-todolist.herokuapp.com",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  },
});

const findAll = async () => {
  const { data } = await apiClient.get("/task");
  return data;
};

const create = async ({ description }: Tutorial) => {
  const { data } = await apiClient.post("/task", { description });
  return data;
};

const tutorialSevice = {
  findAll,
  create,
};
export default tutorialSevice;
