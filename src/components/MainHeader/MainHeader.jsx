import React from "react";
import classNames from "classnames";
import "./MainHeader.css";

class MainHeader extends React.Component {
  render() {
    const { children, cover, className } = this.props;
    const classes = classNames("main-header", className, {
      "no-cover": !cover
    });
    const getStyle = () => {
      if (cover) {
        return { backgroundImage: `url("${cover}")` };
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
