import React from "react";
import { connect } from "react-redux";
import UserHeader from "./UserHeader";
import { fetchPosts } from "../actions";
import { fetchUser } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts(); // can return a function thanks to thunk
    this.props.fetchUser();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            {/* 
             Here ownProps is post.userId
             (ownProps in UserHeader mapState) v
          */}
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts, fetchUser })(PostList);
