import React from "react";
import { Link } from "gatsby";
import "./PaginationLink.css";

class PaginationLink extends React.Component {
  render() {
    const { url, text, className, ...rest } = this.props;
    if (url) {
      const classNames = className ? `nav-link ${className}` : `nav-link`;
      // Clone this.props and then delete Component specific
      // props so we can spread the rest into the img.
      delete rest.style;

      return (
        <Link to={url} className={classNames} {...rest}>
          {text}
        </Link>
      );
    }
    return null;
  }
}

export default PaginationLink;
