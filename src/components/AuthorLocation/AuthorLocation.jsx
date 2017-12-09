import React from "react";

class AuthorLocation extends React.Component {
  render() {
    const { location } = this.props;
    if (location) {
      return <span className="author-location icon-location">{location}</span>;
    }
    return null;
  }
}

export default AuthorLocation;
