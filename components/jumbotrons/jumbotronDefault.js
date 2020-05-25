import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default ({ title }) =>
    <Jumbotron fluid className="jumbotron_tertiary d-flex justify-content-center mb-4">
        <h2>{title === "iaqs" ? "IAQs" : title.toUpperCase()}</h2>
    </Jumbotron>