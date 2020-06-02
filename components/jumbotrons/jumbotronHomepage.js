import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'

export default () =>
    <Jumbotron className="jumbo-homepage justify-content-center mt-5 desktop-jumbotron" fluid>
        <Row>
            <Col className="text-center">
                <Link href="/books">
                    <img
                        className="cover"
                        src="images/book1/front1.jpg"
                        alt="cover" />
                </Link>
            </Col>
            <Col style={{ position: "relative", top: "-100px" }}>
                <h1 className="text-center title mx-4 my-2">MORE HISTORY.</h1>
                <h1 className="text-center title mx-4 my-2">LESS HYSTERIA.</h1>
            </Col>
            <Col className="text-center">
                <Link href="/books">
                    <img
                        className="cover"
                        src="images/book2/front1.jpg"
                        alt="cover" />
                </Link>
            </Col>
        </Row>
    </Jumbotron>