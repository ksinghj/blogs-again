const axios = require("axios").default;

const url = "https://jsonplaceholder.typicode.com/posts";

export const data = axios.get(url).then(
  (response) => {
    console.log(response.data);
  },
  (error) => {
    console.log(error);
  }
);
