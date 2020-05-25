import React from "react";
import BloomsWheel from "../../components/BloomsWheel";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BackButton from '../../components/utils/backButton'
import ContainerWrapper from "../../components/utils/containerWrapper";

export default () =>
    <ContainerWrapper>
        <BackButton href={"tools"} />
        <Row>
            <Col>
                <h2 className="textColorPrimary schadow mt-3">BLOOM'S TAXONOMY WHEEL</h2>
                <h2 className="textColorPrimary schadow mt-1">Click to stop!</h2>
                <BloomsWheel />
            </Col>
        </Row>
    </ContainerWrapper>