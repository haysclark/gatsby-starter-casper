import React from "react";
import "./PageTitle.css";

class PageTitle extends React.Component {
  render() {
    const { text } = this.props;
    if (text) {
      return <h1 className="page-title">{text}</h1>;
    }
    return null;
  }
}

export default PageTitle;
