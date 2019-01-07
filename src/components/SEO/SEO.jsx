import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../../data/SiteConfig";

class SEO extends Component {
  render() {
    const { postNode, postPath, postSEO } = this.props;

    let postTitle;
    let postDescription;
    let postImage;
    let postURL;

    if (postSEO) {
      const postMeta = postNode.frontmatter;
      postTitle = postMeta.title;
      postDescription = postMeta.description
        ? postMeta.description
        : postNode.excerpt;
      postImage = postMeta.cover;
      postURL = config.siteUrl + config.pathPrefix + postPath;
    } else {
      postTitle = config.siteTitle;
      postDescription = config.siteDescription;
      postImage = config.siteLogo;
    }

    const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
    postImage = config.siteUrl + realPrefix + postImage;
    const blogURL = config.siteUrl + config.pathPrefix;
    const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: blogURL,
        name: postTitle,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
      }
    ];
    if (postSEO) {
      schemaOrgJSONLD.push([
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": postURL,
                name: postTitle,
                image: postImage
              }
            }
          ]
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url: blogURL,
          name: postTitle,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
          headline: postTitle,
          image: {
            "@type": "ImageObject",
            url: postImage
          },
          description: postDescription
        }
      ]);
    }
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={postDescription} />
        <meta name="image" content={postImage} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={postSEO ? postURL : blogURL} />
        {postSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={postTitle} />
        <meta property="og:description" content={postDescription} />
        <meta property="og:image" content={postImage} />
        <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ""}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ""}
        />
        <meta name="twitter:title" content={postTitle} />
        <meta name="twitter:description" content={postDescription} />
        <meta name="twitter:image" content={postImage} />
      </Helmet>
    );
  }
}

export default SEO;
