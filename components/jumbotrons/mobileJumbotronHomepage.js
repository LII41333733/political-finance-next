import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default () =>
    <Jumbotron
        className={`jumbo-homepage mobile-jumbotron`} fluid>
        <Row>
            <Col
                className="d-flex justify-content-center">
                <img
                    className="cover"
                    src="images/book1/front1.jpg"
                    alt="cover"
                />
            </Col>
        </Row>
        <Row>
            <Col className="my-5 p-0 justify-content-center">
                <Row>
                    <Col
                        className="text-center title mx-4 my-2"
                        sm={12}>
                        <h1>MORE HISTORY.</h1>
                    </Col>
                </Row>
                <Row>
                    <Col
                        className="text-center title mx-4 my-2"
                        sm={12}>
                        <h1>LESS HYSTERIA.</h1>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col
                className="d-flex justify-content-center"
                lg={4}>
                <img
                    className="cover"
                    src="images/book2/front1.jpg"
                    alt="cover"
                    onClick={() => changeRoute({
                        page: "books",
                        action: "bookScroll"
                    })}
                />
            </Col>
        </Row>
    </Jumbotron >