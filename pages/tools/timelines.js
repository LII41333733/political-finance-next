import React, { useState } from "react";
import Col from 'react-bootstrap/Col'
import RenderTimelineCards from "../../components/utils/renderTimelineCards";
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ContainerWrapper from "../../components/utils/containerWrapper";
import timelines from '../../components/data/timelines'
import Link from 'next/link'
import BackButton from '../../components/utils/backButton'


export default () => {
    const [timelineIndex, setTimelineIndex] = useState(-1);


    return (
        <ContainerWrapper>
            <Row>
                <Col>
                    <h2 className="textColorPrimary schadow mt-3">TIMELINES</h2>

                    {timelineIndex === -1
                        ? <>
                            <RenderTimelineCards
                                onClick={setTimelineIndex} />
                        </>
                        : <>
                            <BackButton
                                onClick={() => setTimelineIndex(-1)}
                            />
                            <Link
                                href={`/checkout`}
                                as={`/checkout/timelines/${timelineIndex + 1}`}>
                                <Button
                                    className="cardButton mb-2"
                                    size="sm"
                                    variant="dark">
                                    {`$${timelines[timelineIndex].price}`}
                                </Button>
                            </Link>
                            <img
                                className="w-90 my-3 timeline"
                                src={timelines[timelineIndex].src}
                                alt={timelines[timelineIndex].alt} />
                        </>
                    }
                    <div className="printDiv">
                        <a target="_blank" href="https://store.printthisforme.com"><img className="printThis mt-5" src={"../images/printthis.jpg"} /></a>
                        <p className={"textLeft"}><a className={"printForMe underline"} target="_blank" href="https://store.printthisforme.com">Print This For Me</a> is a full service online print and design company that specializes in full color offset and digital printing.</p>
                        <p className={"textLeft"}>Timelines can be downloaded for wide format printing for the classroom or the wall at 300 dpi.</p>
                        <p className={"textLeft"}> Please feel free to pay their site a visit for any media printing inquiries.</p>
                    </div>
                </Col>
            </Row>
        </ContainerWrapper>
    )
}