import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import JumbotronDefault from "../components/jumbotrons/jumbotronDefault";
import RenderLessonCards from "../components/utils/renderLessonCards";

export default () => {
    return (
        <div>
            <JumbotronDefault title={"Lesson Plans"} />
            <Container
                className="container-body"
                style={{ marginBottom: "50px" }}>
                <Row
                    className="d-flex justify-content-center">
                    <RenderLessonCards />
                </Row>
            </Container>
        </div>
    )
}