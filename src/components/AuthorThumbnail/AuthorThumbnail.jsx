import React from "react";
import "./AuthorThumbnail.css";

class AuthorThumbnail extends React.Component {
  render() {
    const { avatar, name } = this.props;
    if (avatar && name) {
      return (
        <img
          className="author-thumb"
          src={avatar}
          alt={name}
          data-pin-nopin="true"
        />
      );
    }
    return null;
  }
}

export default AuthorThumbnail;
