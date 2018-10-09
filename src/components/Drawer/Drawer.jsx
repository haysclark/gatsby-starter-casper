import React from "react";
import classNames from "classnames";
import "./Drawer.css";

class Drawer extends React.Component {
  render() {
    const { children, isOpen, className } = this.props;

    const getClassName = isOpened => (isOpened ? "nav-opened" : "nav-closed");
    const classes = classNames(className, getClassName(isOpen));

    return <div className={classes}>{children}</div>;
  }
}

export default Drawer;
