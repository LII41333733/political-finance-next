import React, { useState } from "react";
import Col from 'react-bootstrap/Col'
import RenderCards from "../../components/utils/renderCards";
import timelines from '../../components/data/timelines'
import Row from 'react-bootstrap/Row'
import BackButton from '../../components/utils/backButton'
import ContainerWrapper from "../../components/utils/containerWrapper";

export default ({ setTool }) => {
    const [cardIndex, setCardIndex] = useState(-1);

    return (
        <ContainerWrapper>
            <Row>
                <Col>
                    <h2 className="textColorPrimary schadow mt-3">TIMELINES</h2>
                    {cardIndex === -1
                        ? <>
                            <BackButton href={"tools"} />
                            <RenderCards
                                type={"timelines"}
                                arr={timelines}
                                onClick={(e) => {
                                    setCardIndex(e)
                                }}
                                noCaption={true}
                            />
                        </>
                        : <>
                            <BackButton onClick={() => setCardIndex(-1)} />
                            <img
                                className="w-90 my-3 timeline"
                                src={timelines[cardIndex].src}
                                alt={timelines[cardIndex].alt} />
                        </>}
                </Col>
            </Row>
        </ContainerWrapper>
    )
}