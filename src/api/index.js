const axios = require("axios").default;

const url = `https://jsonplaceholder.typicode.com/`;

const paths = ["posts", "comments", "albums", "photos", "todos", "users"];

export const data = paths.map((path) => {
  axios.get(`${url}${path}`).then(
    (response) => {
      console.log(response.data);
    },
    (error) => {
      console.log(error);
    }
  );
});
