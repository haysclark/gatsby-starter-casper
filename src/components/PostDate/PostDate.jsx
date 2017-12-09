import React from "react";
import moment from "moment";
import "./PostDate.css";

class PostDate extends React.Component {
  render() {
    const { date } = this.props;
    return (
      <time
        className="post-date"
        dateTime={moment(new Date(date)).format("YYYY-MM-DD")}
      >
        {moment(new Date(date)).format("DD MMMM YYYY")}
      </time>
    );
  }
}

export default PostDate;
