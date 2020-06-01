import Nav from 'react-bootstrap/Nav';
import React from "react";
import Link from 'next/link'

export default () => {
    return <Nav>
        <div className="navLinks d-flex justify-content-around">

            <Link href="/"><a className={"pt-1 nav-link"}>Home</a></Link>

            <Link href="/books"><a className={"pt-1 nav-link"}>Books</a></Link>

            <Link href="/lessons"><a className={"pt-1 nav-link"}>Lessons</a></Link>

            <Link href="/tools"><a className={"pt-1 nav-link hide-link"}>Tools</a></Link>

            <Link href="/articles"><a className={"pt-1 nav-link"}>Articles</a></Link>

            <Link href="/iaq"><a className={"pt-1 nav-link hide-link"}>IAQs</a></Link>

            <Link href="/about"><a className={"pt-1 nav-link"}>About</a></Link>
        </div>
    </Nav>
}