import React from "react";
import Card from 'react-bootstrap/Card';
import timelines from '../../components/data/timelines'

//275 x 170
export default ({ onClick }) =>
    timelines.map((e, i) => {
        const { src, title } = e;
        return (
            <div className="d-inline-block" key={i}>
                <Card
                    onClick={() => onClick(i)}
                    border={"dark"}
                    className={`toolCard p-0 d-inline-block m-3 cursor hoverZoom"`}>
                    <Card.Img
                        variant="top"
                        src={src} />
                    <Card.Body className="p-0 my-auto">
                        <Card.Header
                            className="align-items-center justify-content-center d-flex">
                            <div className="headerTitleDiv">
                                <h5 className="m-0 preWrap">{title}</h5>
                            </div>
                        </Card.Header>
                    </Card.Body>
                </Card>
            </div>
        )
    });


