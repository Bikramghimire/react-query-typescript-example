import axios from "axios";
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
  const response = await apiClient.get("/task");
  return response;
};

const tutorialSevice = {
  findAll,
};
export default tutorialSevice;
