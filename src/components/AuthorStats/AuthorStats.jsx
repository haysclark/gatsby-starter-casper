import React from "react";

class AuthorStats extends React.Component {
  render() {
    const { postEdges } = this.props;
    const getPostText = () => {
      if (postEdges) {
        return postEdges.length > 1
          ? `${postEdges.length} posts`
          : `${postEdges.length} post`;
      }
      return "No posts";
    };
    return (
      <span className="author-stats">
        <i className="icon-stats" /> {getPostText()}
      </span>
    );
  }
}

export default AuthorStats;
