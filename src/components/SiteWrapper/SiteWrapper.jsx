import React from "react";
import "./SiteWrapper.css";

class SiteWrapper extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="site-wrapper">{children}</div>;
  }
}

export default SiteWrapper;
