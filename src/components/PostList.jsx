import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts(); // can be a function thanks to thunk
  }

  render() {
    return <div> PostList</div>;
  }
}

// const mapStateToProps = (state) => {
//   return { : state. };
// };

export default connect(null, { fetchPosts })(PostList);
