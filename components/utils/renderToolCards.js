import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Link from 'next/link'
import tools from '../../components/data/tools'

//275 x 170
export default () =>
    tools.map((e, i) => {
        const { src, title, caption, slug } = e;
        return (
            <div className="d-inline-block" key={i}>
                <Link href={`tools/${slug}`}>
                    <Card
                        border={"dark"}
                        className={`toolCard p-0 d-inline-block m-3 cursor hoverZoom toolCardLong`}>
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
                            <Card.Text
                                className="text-justify d-flex textSize-4 px-3 mb-3">
                                {caption}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
        )
    });
