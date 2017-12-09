import React from "react";
import PaginationLink from "../PaginationLink/PaginationLink";
import "./Pagination.css";

class Pagination extends React.Component {
  render() {
    const { page, pages, prev, next } = this.props;
    return (
      <nav className="pagination">
        <PaginationLink
          className="newer-posts"
          url={prev}
          text="← Newer Posts"
        />
        <span className="page-number">
          Page {page} of {pages}
        </span>
        <PaginationLink
          className="older-posts"
          url={next}
          text="Older Posts →"
        />
      </nav>
    );
  }
}

export default Pagination;
