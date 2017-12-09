import React from "react";
import classNames from "classnames";
import "./AuthorMeta.css";

class AuthorMeta extends React.Component {
  render() {
    const { children, className } = this.props;
    const classes = classNames("author-meta", className);

    return <div className={classes}>{children}</div>;
  }
}

export default AuthorMeta;
