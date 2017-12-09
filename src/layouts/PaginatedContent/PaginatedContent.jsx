import React from "react";
import MainContent from "../MainContent/MainContent";
import Pagination from "../../components/Pagination/Pagination";
import "./PaginatedContent.css";

class PaginatedContent extends React.Component {
  render() {
    const { page, pages, prev, next, children } = this.props;
    let className = "";
    if (page > 1) {
      className = `${className} paged`;
    }
    return (
      <MainContent className={className}>
        {/* Previous/next page links - only displayed on page 2+ */}
        <div className="extra-pagination inner">
          <Pagination page={page} pages={pages} prev={prev} next={next} />
        </div>

        {children}

        {/* Previous/next page links - displayed on every page */}
        <Pagination page={page} pages={pages} prev={prev} next={next} />
      </MainContent>
    );
  }
}

export default PaginatedContent;
