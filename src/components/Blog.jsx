import React from "react";
import BlogLink from "./BlogLink";

// import htmlLogo from "../media/languageLogo/htmlLogo.png";
import githubLogo from "../media/languageLogo/github.png";
import contributionLogo from "../media/languageLogo/contribution.jpg";
import sassLogo from "../media/languageLogo/sass.png";


const Blog = () => {
  return (
    <div className="mx-2">
      <h4 className="text-center text-success my-2 ">Let's Buid</h4>

      <div className="left-nav">
        <BlogLink
          link="/instruction"
          logo={contributionLogo}
          head="Start Contribution"
        />
        <BlogLink
          link="/blog/git-github"
          logo={githubLogo}
          head="Git and GitHub CLI"
        />
        <BlogLink
          link="/blog/sass"
          logo={sassLogo}
          head="Sass"
        />
      </div>
    </div>
  );
};

export default Blog;
