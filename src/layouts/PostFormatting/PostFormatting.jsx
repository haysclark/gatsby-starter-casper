import React from "react";
import "./PostFormatting.css";

class PostFormatting extends React.Component {
  render() {
    const { children, className } = this.props;
    return <article className={className}>{children}</article>;
  }
}

export default PostFormatting;
