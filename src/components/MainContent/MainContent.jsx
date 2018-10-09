import React from "react";
import classNames from "classnames";
import "./MainContent.css";

class MainContent extends React.Component {
  render() {
    const { children } = this.props;

    const classes = classNames("content", this.props.className);

    return (
      <main id="content" className={classes} role="main">
        {children}
      </main>
    );
  }
}

export default MainContent;
