import React, { Component } from "react";
import { Follow } from "react-twitter-widgets";

class UserInfo extends Component {
  render() {
    const { expanded, config } = this.props;
    return (
      <Follow username={config} options={{ count: expanded ? true : "none" }} />
    );
  }
}

export default UserInfo;
