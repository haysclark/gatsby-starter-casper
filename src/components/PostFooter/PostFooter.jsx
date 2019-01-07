import React from "react";
import "./PostFooter.css";

class PostFooter extends React.Component {
  render() {
    const { children } = this.props;
    return <footer className="post-footer">{children}</footer>;
  }
}

export default PostFooter;
