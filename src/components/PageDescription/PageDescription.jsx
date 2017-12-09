import React from "react";
import "./PageDescription.css";

class PageDescription extends React.Component {
  render() {
    const { text } = this.props;
    if (text) {
      return <h2 className="page-description">{text}</h2>;
    }
    return null;
  }
}

export default PageDescription;
