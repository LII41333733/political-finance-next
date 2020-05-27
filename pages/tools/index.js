import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import JumbotronDefault from "../../components/jumbotrons/jumbotronDefault";
import RenderToolCards from "../../components/utils/renderToolCards";

export default () =>
    <>
        <JumbotronDefault title={"Tools"} />
        <Container className="shortDownSpacer container-body">
            <Row className="row d-flex justify-content-center">
                <RenderToolCards />
            </Row>
        </Container>
    </>