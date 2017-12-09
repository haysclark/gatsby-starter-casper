[![Code Climate](https://codeclimate.com/github/haysclark/gatsby-starter-casper/badges/gpa.svg)](https://codeclimate.com/github/haysclark/gatsby-starter-casper)
[![Issue Count](https://codeclimate.com/github/haysclark/gatsby-starter-casper/badges/issue_count.svg)](https://codeclimate.com/github/haysclark/gatsby-starter-casper)

<div align="center">
    <img src="static/logos/logo-1024.png" alt="Logo" width='200px' height='200px'/>
</div>

# Gatsby Casper Starter

A blog starter skeleton with advanced features for [Gatsby](https://github.com/gatsbyjs/gatsby/) utilizing the [Casper Theme (v1.4)](https://github.com/TryGhost/Casper/tree/1.4) for [Ghost](https://ghost.io/).

## Why?

This project aims to provide a minimal for building GatsbyJS powered blogs which a rather popular theme which has been ported to various platforms.

It doesn't define any UI limitations in any way, and only gives you the basic components for SEO/Social Media/etc.

You are free to use any UI framework/styling options available to you.

NOTE: This project is a stripped down version of [Gatsby Material Starter](https://github.com/Vagr9K/gatsby-material-starter), but will evolve separately.

## How can I use this?

If you are a newcomer to Gatsby who's interested in the implementations of most needed features, this is a great place to start.

If you are interested in a foundation for building ultra-fast websites, you can use this project as a "minimal" starter.

[Demo website.](https://haysclark.github.io/gatsby-starter-casper/)

## Features

* Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
* Separate components for everything
* High configurability:
  * User information
  * User social profiles
  * Copyright information
  * More!
* Author segment
  * Name
  * Location
  * Description
  * Links
  * Follow Me button
* Posts in Markdown
  * Code syntax highlighting
  * Embed YouTube videos
  * Embed Tweets
  * Pages support pagination
  * Read More linked paginated pages  
* Tags
  * Separate page for posts under each tag
  * Pages support pagination.
* Categories (pages generated but not linked in theme)
  * Separate page for posts under each category
* Disqus support (needs to be uncommented)
  * Notifications about new disqus comments
* Google Analytics support
* NPM scripts for GitHub Pages deployment
* Social features (uncomment code to use)
  * Twitter tweet button 
  * Facebook share/share count
  * Reddit share/share count
  * Google+ share button
  * LinkedIn share button
  * Telegram share button
* SEO
  * Sitemap generation
  * robots.txt
  * General description tags
  * Schema.org JSONLD (Google Rich Snippets)
  * OpenGraph Tags (Facebook/Google+/Pinterest)
  * Twitter Tags (Twitter Cards)
* RSS feeds
* Loading progress for slow networks
* Offline support
* Web App Manifest support
* Development tools
  * ESLint for linting
  * Prettier for code style
  * Remark-Lint for linting Markdown
  * write-good for linting English prose
  * gh-pages for deploying to GitHub pages
  * CodeClimate configuration file and badge

NOTE: Feel free to check out [Gatsby Material Starter](https://github.com/Vagr9K/gatsby-material-starter) if you are interested in a more opinionated starter with Material Design in mind.

## Getting Started

Install this starter (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed) by running from your CLI:

```sh
gatsby new YourProjectName https://github.com/haysclark/gatsby-starter-casper
npm install # or yarn install
npm run develop # or gatsby develop
```

Or you can fork the project, make your changes there and merge new features when needed.

Alternatively:

```sh
git clone https://github.com/haysclark/gatsby-starter-casper YourProjectName # Clone the project
cd YourProjectname
rm -rf .git # So you can have your own changes stored in VCS.
npm install # or yarn install
npm run develop # or gatsby develop
```

## Configuration

 Edit the export object in `data/SiteConfig`:

 ```js
 module.exports = {
   blogPostDir: "sample-posts", // The name of directory that contains your posts.
   blogAuthorDir: "sample-authors", // The name of directory that contains your authors.
   blogAuthorId: "casper", // The default and fallback author ID used for blog posts without a defined author.
   siteTitle: "Gatsby Casper Starter", // Site title.
   siteTitleAlt: "GatsbyJS Casper Theme Starter", // Alternative site title for SEO.
   siteLogo: "logos/logo-1024.png", // Logo used for SEO and manifest.
   siteUrl: "https://haysclark.github.io", // Domain of your website without pathPrefix.
   pathPrefix: "/gatsby-starter-casper", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
   siteDescription:
     "A Casper themed GatsbyJS stater based on the Advanced Stater.", // Website description used for RSS feeds/meta description tag.
   siteCover: "images/blog-cover.jpg",
   siteNavigation: true, // If navigation is enabled the Menu button will be visible
   siteRss: "/rss.xml", // Path to the RSS file.
   siteRssAuthor: "Casper User", // The author name used in the RSS file
   // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
   sitePaginationLimit: 10, // The max number of posts per page.
   googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
   siteSocialUrls: [
     "https://github.com/haysclark/gatsby-starter-casper",
     "https://twitter.com/gatsbyjs",
     "mailto:gatsbyjs@example.com"
   ],
   postDefaultCategoryID: "Tech", // Default category for posts.
   // Links to social profiles/projects you want to display in the navigation bar.
   userLinks: [
     {
       label: "GitHub",
       url: "https://github.com/haysclark/gatsby-starter-casper",
       iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
     },
     {
       label: "Twitter",
       url: "https://twitter.com/gatsbyjs",
       iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
     },
     {
       label: "Email",
       url: "mailto:gatsbyjs@example.com",
       iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
     }
   ],
   // Copyright string for the footer of the website and RSS feed.
   copyright: {
     label: "Gatsby Casper Starter" // label used before the year
     // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
     // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
   },
   themeColor: "#c62828", // Used for setting manifest and progress theme colors.
   backgroundColor: "#e0e0e0", // Used for setting manifest background color.
   promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
 };
 ```

 You can also optionally set `pathPrefix`:
 ```js
 module.exports = {
  // Note: it must *not* have a trailing slash.
       pathPrefix: '/gatsby-starter-casper', // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
}

 ```

 WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!
