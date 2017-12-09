import React from "react";
import classNames from "classnames";
import "./MainNav.css";

class MainNav extends React.Component {
  render() {
    const { children, overlay } = this.props;

    const classes = classNames("main-nav", this.props.className, {
      overlay
    });

    return <nav className={classes}>{children}</nav>;
  }
}

export default MainNav;
