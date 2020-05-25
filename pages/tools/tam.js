import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ContainerWrapper from "../../components/utils/containerWrapper";
import BackButton from "../../components/utils/backButton";

export default () =>
    <ContainerWrapper>
        <BackButton href="tools" />
        <Row>
            <Col>
                <h2 className="textColorPrimary schadow mt-3 mb-4">TRANSACTIONAL MODEL FOR EFFECTIVE COMMUNICATION AND LEARNING</h2>
                <img
                    className="tamImg"
                    src={`/images/tools/tam/TA.jpg`}
                    alt="TAM Image" />
                <div className="textLeft mt-3 px-5">Transactional Analysis can be studied in-depth, but for purposes here it’s a model to remind us of effective communications and transactions. Effective teaching, if possible, should be done via the “Adult to Adult” channel. </div>
            </Col>
        </Row>
    </ContainerWrapper>