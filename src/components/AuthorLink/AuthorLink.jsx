import React from "react";
import Link from "gatsby-link";
import "./AuthorLink.css";

class AuthorLink extends React.Component {
  render() {
    const { name, url } = this.props;
    if (name && url) {
      return <Link to={url}>{name}</Link>;
    }
    return null;
  }
}

export default AuthorLink;
