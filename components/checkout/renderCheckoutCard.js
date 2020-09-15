import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from "next/link";

export default ({ data, showConfirmation }) => {
    const { image, media, title, price } = data;
    debugger;
    return (
        <>
            <Card
                border={"dark"}
                className={`toolCard p-0 d-inline-block m-3 textCenter`}>
                <Card.Img
                    variant="top"
                    src={image} />
                <Card.Body className="p-0 my-auto">
                    <Card.Header
                        className="align-items-center justify-content-center d-flex">
                        <div className="headerTitleDiv">
                            <h5 className="m-0 preWrap">{title}</h5>
                        </div>
                    </Card.Header>
                    <Card.Body className="checkoutText mb-3 mx-4">
                        <Row>
                            <div className={"w-100"}>
                                <div className="float-left">Subtotal</div>
                                <div className="w-40 float-right">{price}</div>
                            </div>
                            <div className={"w-100"}>
                                <div className="float-left">Tax</div>
                                <div className="w-40 float-right">-</div>
                            </div>
                            <div className={"totalDiv w-100 mb-3"}>
                                <div className="float-left">Total</div>
                                <div className="w-40 float-right">{price}</div>
                            </div>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    variant={"dark"}
                                    size="lg"
                                    className={`checkoutBtnDownload w-100 ${!showConfirmation && "not-allowed"}`}
                                    href={media}
                                    download={title}
                                    disabled={!showConfirmation}>
                                    {"Download"}
                                </Button>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card.Body>
            </Card>
            {showConfirmation &&
                <Row>
                    <Col>
                        <Link
                            href="/">
                            <Button
                                className="mb-4"
                                size="lg"
                                variant="dark">
                                {"Return to Home"}
                            </Button>
                        </Link>
                    </Col>
                </Row>
            }
        </>
    );
}