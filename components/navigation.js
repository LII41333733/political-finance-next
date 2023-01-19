import Nav from "react-bootstrap/Nav";
import React from "react";
import articles from "./data/articles";
import Link from "next/link";

export default () => {
  return (
    <Nav>
      <div className="navLinks d-flex justify-content-around">
        <Link href="/">
          <span className={"pt-1 nav-link"}>Home</span>
        </Link>

        <Link href="/books">
          <span className={"pt-1 nav-link"}>Books</span>
        </Link>

        <Link href="/lessons">
          <span className={"pt-1 nav-link"}>Lessons</span>
        </Link>

        <Link href="/tools">
          <span className={"pt-1 nav-link hide-link"}>Tools</span>
        </Link>

        <Link href={`/articles/${articles.length}`}>
          <span className={"pt-1 nav-link"}>Articles</span>
        </Link>

        <Link href="/iaq">
          <span className={"pt-1 nav-link hide-link"}>IAQs</span>
        </Link>

        <Link href="/about">
          <span className={"pt-1 nav-link"}>About</span>
        </Link>
      </div>
    </Nav>
  );
};
