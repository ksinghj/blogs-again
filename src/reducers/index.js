import { combineReducers } from "redux";
import "../actions";

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload.data;
    default:
      return state;
  }
};

export default combineReducers({
  posts: postsReducer,
});
