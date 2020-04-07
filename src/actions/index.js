import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: res });
};

export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: res });
};
