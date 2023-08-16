import React from "react";
import { Link } from "react-router-dom";
import BlogTitle from "../components/BlogTitle";
import Step from "../components/Step";
import Text from "../components/Text";
import Code from "../components/Code";

const SassBlog = () => {
  const installSass = `npm install node-sass`;

  const sassIntro = `Sass, short for Syntactically Awesome Style Sheets, is a powerful and feature-rich CSS preprocessor that enhances the way you write and manage your stylesheets.`;

  const sassAdvantages = [
    `Variables: Define reusable values to use throughout your stylesheets.`,
    `Nesting: Nest CSS rules within one another, making your code more organized.`,
    `Mixins: Create reusable sets of styles that can be included in multiple selectors.`,
    `Partials: Break your styles into modular files and import them as needed.`,
    `Extend/Inheritance: Share styles between selectors to keep your code DRY.`,
  ];

  const exampleSass = `
    $primary-color: #007bff;

    .button {
        background-color: $primary-color;
        color: white;
        padding: 10px 20px;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: darken($primary-color, 10%);
        }
    }
    `;
  const additionalExamples = `
    $secondary-color: #e74c3c;
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
    
        .heading {
            font-size: 24px;
            color: $secondary-color;
        }
    
        .content {
            padding: 20px;
            background-color: lighten($secondary-color, 20%);
        }
    }
    `;

  return (
    <div className="container">
      <BlogTitle title="Sass: Streamlining Your CSS Workflow" />

      {/* Introduction */}
      <Step no={1} heading="What is Sass?" />
      <Text text={sassIntro} />

      {/* Advantages */}
      <Step no={2} heading="Advantages of Using Sass" />
      <ul>
        {sassAdvantages.map((advantage, index) => (
          <li key={index}>{advantage}</li>
        ))}
      </ul>

      {/* Installation */}
      <Step no={3} heading="Getting Started with Sass" />
      <Text text="To start using Sass in your projects, you need to install it using npm:" />
      <Code code={installSass} />

      {/* Basic Example */}
      <Step no={4} heading="Writing Sass Code" />
      <Text text="Here is a basic example demonstrating the power of Sass:" />
      <Code code={exampleSass} />

      <Text text="In this example, we define a variable for the primary color and use it throughout the stylesheet. The `&:hover` selector is used to style the button on hover." />

      {/* Additional Examples */}
      <Step no={5} heading="More Sass Examples" />
      <Text text="'Let\'s explore more Sass features with examples:' " />
      <Code code={additionalExamples} />

      <Text text="In this example, we define a secondary color and use it within the `.container` selector. We also utilize the `lighten` function to adjust the background color. The nested structure makes the code more organized and maintainable." />

      {/* Contribute */}

      {/* Conclusion */}
      <Step no={6} heading="Conclusion" />
      <Text text="Sass is a fantastic tool that can significantly improve your CSS workflow. Its features like variables, nesting, and mixins help you write cleaner, more maintainable stylesheets. By using Sass, you can create styles that are both efficient and easy to manage." />

      <Text text="Are you excited to start using Sass in your projects? Dive in and experience the benefits firsthand!" />

      {/* Contribute */}
      <Text text="'You've reached the end of this guide. If you want to help others, consider contributing to this project!'" />
      <div className="text-center">
        <Link to="/instruction">
          <button className="btn btn-primary my-5">How to Contribute!</button>
        </Link>
      </div>
    </div>
  );
};
export default SassBlog;
