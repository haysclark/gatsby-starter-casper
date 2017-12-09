import React from "react";
import "./PostHeader.css";

class PostHeader extends React.Component {
  render() {
    const { children } = this.props;
    return <header className="post-header">{children}</header>;
  }
}

export default PostHeader;
