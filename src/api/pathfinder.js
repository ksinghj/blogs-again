const axios = require("axios").default;

const url = `https://jsonplaceholder.typicode.com/`;

const paths = ["posts", "comments", "albums", "photos", "todos", "users"];

function pathfinder(req, url, path = "") {
  const paths = [`${path}`]; // splice params add all but first 2
  console.log(paths);
  const data = paths.map((path) => {
    axios.${req}(`${url}${path}`).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  });

  console.log(data);
}

// pathfinder(get);

// IDEA: function that returns fetch requests with specified endpoints
// E.g func(get, url, posts, comments) // returns axios.get posts and comments!
// puts 3nd and onward params into endpoints arr
// 1st param is type of request
// 2nd param is url to be requested
// output is 1st param request of 3rd and onward params on url (2nd param)
// func(FETCHTYPE, ENDPOINT, ENDPOINT, ENDPOINT) returns axios.FETCHTYPE(url/ENDPOINT) for all ENDPOINTS
