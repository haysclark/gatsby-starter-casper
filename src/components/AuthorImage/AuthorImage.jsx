import React from "react";
import "./AuthorImage.css";

class AuthorImage extends React.Component {
  render() {
    const { name, image, url } = this.props.author;
    if (image) {
      return (
        <figure className="author-image">
          <a
            className="img"
            href={url}
            style={{ backgroundImage: `url("${image}")` }}
          >
            <span className="hidden">{`${name}'s Picture`}</span>
          </a>
        </figure>
      );
    }
    return null;
  }
}

export default AuthorImage;
