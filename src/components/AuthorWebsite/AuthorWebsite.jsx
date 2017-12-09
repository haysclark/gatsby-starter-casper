import React from "react";

class AuthorWebsite extends React.Component {
  render() {
    const { url } = this.props;
    if (url) {
      return (
        <span className="author-link icon-link">
          <a href={url}>{url}</a>
        </span>
      );
    }
    return null;
  }
}

export default AuthorWebsite;
