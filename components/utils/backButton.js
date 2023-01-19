import React from "react";
import Link from "next/link";

export default ({ href, onClick }) =>
  href ? (
    <Link href={`/${href}`}>
      <span className="backBtnCircle cursor">
        <span className="backArrow">↩</span>
      </span>
    </Link>
  ) : (
    <a onClick={onClick} className="backBtnCircle cursor">
      <span className="backArrow">↩</span>
    </a>
  );
