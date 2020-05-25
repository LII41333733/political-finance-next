import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import JumbotronDefault from "../../components/jumbotrons/jumbotronDefault";
import RenderCards from "../../components/utils/renderCards";
import tools from '../../components/data/tools'

export default () =>
    <>
        <JumbotronDefault title={"Tools"} />
        <Container className="shortDownSpacer container-body">
            <Row className="row d-flex justify-content-center">
                <RenderCards arr={tools} type={"tools"} />
            </Row>
        </Container>
    </>