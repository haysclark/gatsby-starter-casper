import React from "react";
import classNames from "classnames";
import "./MainNav.css";

class MainNav extends React.Component {
  render() {
    const { children, className } = this.props;
    const formatting = ["overlay", "clearfix"];
    const classes = classNames("main-nav", formatting, className);

    return <nav className={classes}>{children}</nav>;
  }
}

export default MainNav;
