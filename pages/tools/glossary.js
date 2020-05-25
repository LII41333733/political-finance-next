import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BackButton from "../../components/utils/backButton";
import ContainerWrapper from "../../components/utils/containerWrapper"

export default () => {
    const Gallery = () => {
        const arr = [];
        for (let i = 1; i <= 8; i++) {
            arr.push(
                <img
                    className="galleryImage"
                    src={`/images/tools/glossary/glossary-${i}.jpg`}
                    alt="Gallery" />
            )
        }
        return arr;
    }

    return (
        <ContainerWrapper>
            <BackButton href={"tools"} />
            <Row>
                <Col>
                    <h2 className="textColorPrimary schadow mt-3">GLOSSARY</h2>
                    <Gallery />
                </Col>
            </Row>
        </ContainerWrapper>
    )
}