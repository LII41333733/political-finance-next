import Nav from 'react-bootstrap/Nav';
import React from "react";
import Link from 'next/link'

export default () => {
    return <Nav>
        <div className="navPill d-flex justify-content-around">

            <Link href="/"><a className={"pt-1"}>Home</a></Link>

            <Link href="/books"><a className={"pt-1"}>Books</a></Link>

            <Link href="/lessons"><a className={"pt-1"}>Lessons</a></Link>

            <Link href="/tools"><a className={"pt-1"}>Tools</a></Link>

            <Link href="/articles"><a className={"pt-1"}>Articles</a></Link>

            <Link href="/iaq"><a className={"pt-1"}>IAQs</a></Link>

            <Link href="/about"><a className={"pt-1"}>About</a></Link>
        </div>
    </Nav>
}