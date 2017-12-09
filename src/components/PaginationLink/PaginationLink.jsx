import React from "react";
import Link from "gatsby-link";
import "./PaginationLink.css";

class PaginationLink extends React.Component {
  render() {
    if (this.props.url) {
      let className = "nav-link";
      if (this.props.className) {
        className = `${className} ${this.props.className}`;
      }

      // Clone this.props and then delete Component specific
      // props so we can spread the rest into the img.
      const { ...rest } = this.props;
      delete rest.style;
      delete rest.className;
      delete rest.text;
      delete rest.url;

      return (
        <Link to={this.props.url} {...rest} className={className}>
          {this.props.text}
        </Link>
      );
    }
    return null;
  }
}

export default PaginationLink;
