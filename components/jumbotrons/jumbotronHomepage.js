import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default () =>
    <Jumbotron className="jumbo-homepage d-flex justify-content-end mt-5" fluid>
        <Container>
            <Row>
                <Col
                    className="d-flex justify-content-end"
                    lg={4}>
                    <img
                        className="cover"
                        src="images/book1/front1.jpg"
                        alt="cover"
                        onClick={() => changeRoute({
                            page: "books",
                            action: ""
                        })}
                    />
                </Col>
                <Col lg={4} className="my-auto p-0"
                    style={{ position: "relative", top: "-100px" }}>
                    <h1>MORE HISTORY.</h1>
                    <h1>LESS HYSTERIA.</h1>
                </Col>
                <Col
                    className="d-flex justify-content-start"
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
        </Container>
    </Jumbotron>