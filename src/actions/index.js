import { data } from "../api";

export const fetchPosts = () => {
  return {
    type: "FETCH_POSTS",
    payload: data,
  };
};
