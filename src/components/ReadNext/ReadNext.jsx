import React, { Component } from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import "./ReadNext.css";

const ReadNextStory = props => {
  const { post } = props;
  if (post) {
    /** Limit words to 19 in GraphQL * */
    const { path, cover, title, excerpt } = post;
    const styles = cover ? { backgroundImage: `url(${cover}` } : null;
    const classes = classNames("read-next-story", props.className, {
      "no-cover": !cover
    });
    return (
      <Link className={classes} style={styles} to={path}>
        <section className="post">
          <h2>{title}</h2>
          <p>{excerpt}&hellip;</p>
        </section>
      </Link>
    );
  }
  return null;
};

/**
 * Links to Previous/Next posts
 */
class ReadNext extends Component {
  render() {
    const { next, prev } = this.props;
    return (
      <aside className="read-next">
        <ReadNextStory post={next} />
        <ReadNextStory className="prev" post={prev} />
      </aside>
    );
  }
}

export default ReadNext;
