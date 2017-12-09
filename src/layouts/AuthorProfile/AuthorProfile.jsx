import React from "react";
import classNames from "classnames";
import "./AuthorProfile.css";

class AuthorProfile extends React.Component {
  render() {
    const { children, className } = this.props;
    const classes = classNames("author-profile", className);

    return <section className={classes}>{children}</section>;
  }
}

export default AuthorProfile;
