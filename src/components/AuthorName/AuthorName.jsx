import React from "react";
import "./AuthorName.css";

class AuthorName extends React.Component {
  render() {
    const { name } = this.props;
    if (name) {
      return <h1 className="author-title">{name}</h1>;
    }
    return null;
  }
}

export default AuthorName;
