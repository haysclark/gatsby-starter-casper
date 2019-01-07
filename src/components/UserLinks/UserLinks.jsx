import React, { Component } from "react";
import "./UserLinks.css";

class UserLinks extends Component {
  render() {
    const {
      labeled,
      config: { userLinks }
    } = this.props;
    if (!userLinks) {
      return null;
    }
    return (
      <div className="user-links">
        {userLinks.map(link => (
          <button type="button" key={link.label} href={link.url}>
            {labeled ? link.label : ""}
          </button>
        ))}
      </div>
    );
  }
}

export default UserLinks;
