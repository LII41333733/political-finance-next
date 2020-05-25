import React, { useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'


export default () => {
    const [email, changeEmail] = useState("");
    return (
        <>
            <Jumbotron fluid className="footer">
                <Row className="row h-100">
                    <Col
                        className="my-auto"
                        lg={12}>
                        <Row
                            className="">
                            <Col className="d-flex justify-content-between footerNav">
                                <Link href="/"><h5
                                    className="cursor"
                                >Home</h5></Link>
                                <Link href="/books"><h5
                                    className="cursor"
                                >Books</h5></Link>
                                <Link href="/lessons"><h5
                                    className="cursor"
                                >Lesson Plans</h5></Link>
                                <Link href="/tools"><h5
                                    className="cursor"
                                >Tools</h5></Link>
                                <Link href="/articles"><h5
                                    className="cursor"
                                >Articles</h5></Link>
                                <Link href="/iaq"><h5
                                    className="cursor"
                                >IAQs</h5></Link>
                                <Link href="/about"><h5
                                    className="cursor"
                                >About</h5></Link>
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col className="d-flex justify-content-between">
                                <h5 className="footer-sub">Terms & Conditions</h5>
                                <h5 className="footer-sub">Privacy Policy</h5>
                                <h5 className="footer-sub">Terms of Use</h5>
                                <h5 className="footer-sub">Copyright &copy;2020</h5>
                            </Col>
                        </Row> */}
                    </Col>

                    {/* <Col
                        lg={5}
                        className="my-auto col-lg-5 p-0 pl-5">
                        <h5>Subscribe to my newsletter</h5>
                        <input onChange={(e) => changeEmail(e.target.value)} name="subscribeEmail" placeholder="example@myemail.com" value={email} /><i className="fa far fa-check-square"></i>
                    </Col> */}
                </Row>
            </Jumbotron>
        </>
    )
}


