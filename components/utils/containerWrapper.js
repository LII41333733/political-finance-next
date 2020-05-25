import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default ({ children }) =>
    <Container className="shortDownSpacer container-body">
        <Row className="row d-flex justify-content-center">
            {children}
        </Row>
    </Container>