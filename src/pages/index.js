import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { image as imageStyles } from "./index.module.css";

const IndexPage = () => {
  return (
    <>
      <header>
        <StaticImage
          src="../images/icon.png"
          alt="The Gatsby icon"
          className={imageStyles}
        />
      </header>
      <main>
        <title>Home Page</title>
        <h1>Hello world!</h1>
        <p>
          The image in the header is hidden on small breakpoints and visible on
          large breakpoints.
        </p>
        <p>
          It works as expected when running <code>gatsby develop</code>. But
          when running <code>gatsby build && gatsby serve</code> the image shows
          at both large and small breakpoints.
        </p>
      </main>
    </>
  );
};

export default IndexPage;
