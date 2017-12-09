import React from "react";
import "./GhostSubscribe.css";

class GhostSubscribe extends React.Component {
  render() {
    const { subscribers, blog } = this.props;
    // const subscribeFormPlaceholder = "Your email address";
    if (subscribers && blog) {
      // Email subscribe form at the bottom of the page
      return (
        <section className="gh-subscribe">
          <h3 className="gh-subscribe-title">Subscribe to {blog.title}</h3>
          <p>Get the latest posts delivered right to your inbox.</p>
          <span className="gh-subscribe-rss">
            or subscribe{" "}
            <a href="http://cloud.feedly.com/#subscription/feed/{blog.url}/rss/">
              via RSS
            </a>{" "}
            with Feedly!
          </span>
        </section>
      );
    }
    return null;
  }
}

export default GhostSubscribe;
