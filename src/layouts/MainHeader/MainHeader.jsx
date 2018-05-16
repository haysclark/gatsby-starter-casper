import React from "react";
import classNames from "classnames";
import { withPrefix } from "gatsby-link";
import "./MainHeader.css";

class MainHeader extends React.Component {
  render() {
    const { children, cover } = this.props;

    const classes = classNames("main-header", this.props.className, {
      "no-cover": !cover
    });

    const getStyle = () => {
      if (cover) {
        return { backgroundImage: `url("${withPrefix(cover)}")` };
      }
      return null;
    };

    return (
      <header className={classes} style={getStyle()}>
        {children}
      </header>
    );
  }
}

export default MainHeader;
