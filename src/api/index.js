const axios = require("axios").default;

const url = `https://jsonplaceholder.typicode.com/`;

const endpoints = ["posts", "comments", "albums", "photos", "todos", "users"];

export const data = endpoints.map((endpoint) => {
  axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`).then(
    (response) => {
      console.log(response.data);
    },
    (error) => {
      console.log(error);
    }
  );
});

// IDEA: function that returns fetch requests with specified endpoints
// E.g func(get, url, posts, comments) // returns axios.get posts and comments!
// puts 3nd and onward params into endpoints arr
// 1st param is type of request
// 2nd param is url to be requested
// output is 1st param request of 3rd and onward params on url (2nd param)
// func(FETCHTYPE, ENDPOINT, ENDPOINT, ENDPOINT) returns axios.FETCHTYPE(url/ENDPOINT) for all ENDPOINTS
