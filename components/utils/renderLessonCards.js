import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'
import Link from 'next/link'
import lessonPlans from '../../components/data/lessonPlans'
import { useState } from "react";

//275 x 170
export default ({ setModalIndex }) => {
    return lessonPlans.map((e, i) => {
        const { src, title, href, price } = e;
        return (
            <div className="d-inline-block" key={i}>
                <Card
                    border={"dark"}
                    className={`toolCard p-0 d-inline-block m-3`}>
                    <div
                        onClick={() => setModalIndex(i)}
                        className="infoBtnCircle cursor"><div className="infoIcon">i</div></div>
                    <Card.Img
                        variant="top"
                        src={src} />
                    <Card.Body className="p-0 my-auto">
                        <Card.Header
                            className="align-items-center justify-content-center d-flex mb-2">
                            <div className="headerTitleDiv">
                                <h5 className="m-0 preWrap">{title}</h5>
                            </div>
                        </Card.Header>
                        {price === "0"
                            ? <Button
                                index={i}
                                className="cardButton mb-2"
                                href={href}
                                size="sm"
                                download={title}
                                variant="dark">
                                {"Free Download"}
                            </Button>
                            : <Link
                                href={`/checkout`}
                                as={`/checkout/lessons/${i + 1}`}>
                                <Button
                                    className="cardButton mb-2"
                                    size="sm"
                                    variant="dark">
                                    {`$${price}`}
                                </Button>
                            </Link>}
                    </Card.Body>
                </Card>
            </div>
        )
    })
};
