import React from "react";
import Link from "gatsby-link";
import "./Author.css";

const Bio = props => {
  const { text } = props;
  if (text) {
    return <p>{text}</p>;
  }
  return (
    <p>
      Read <Link to="/">more posts</Link> by this author.
    </p>
  );
};

const Location = props => {
  const { location } = props;
  if (location) {
    return (
      <span>
        <span
          style={{ fontSize: "2rem", margin: 0, verticalAlign: "middle" }}
          className="icon-location"
        />
        <span className="author-location">{location}</span>
      </span>
    );
  }
  return null;
};

const Website = props => {
  const { url } = props;
  if (url) {
    return (
      <span>
        <span
          style={{ fontSize: "2rem", margin: 0, verticalAlign: "middle" }}
          className="icon-link"
        />
        <span className="author-link">
          <Link to={url}>{url}</Link>
        </span>
      </span>
    );
  }
  return null;
};

class Author extends React.Component {
  render() {
    const { author } = this.props;
    if (author) {
      const { name, bio, location, website, avatar } = author;
      if (name && bio && location && website && avatar) {
        return (
          <div>
            <figure className="author-image">
              <Link
                className="img"
                to="/"
                style={{ backgroundImage: `url( ${avatar} )` }}
              >
                <span className="hidden">{`${name}'s Picture`}</span>
              </Link>
            </figure>

            <section className="author">
              <h4>
                <Link to={website}>{name}</Link>
              </h4>
              <Bio text={bio} />
              <div className="author-meta">
                <Location location={location} />
                <Website url={website} />
              </div>
            </section>
          </div>
        );
      }
    }
    return <div style={{ height: 70 }} />;
  }
}

export default Author;
