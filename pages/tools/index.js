import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import JumbotronDefault from "../../components/jumbotrons/jumbotronDefault";
import RenderToolCards from "../../components/utils/renderToolCards";

export default () =>
    <>
        <Head>
            <title>{"billpacello.com"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={"The Backstory of America"} />
            <meta property="og:description" content={"With the fallout of 2008 and now in 2020, the current structure of the financial system under scrutiny by people the world over, scores of books, documentaries, and videos were produced to explain what happened and what our future holds."} />
            <meta property="og:image" content={"images/facebookBanner.jpg"} />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="199" />
            <meta property="og:url" content={`https://www.billpacello.com`} />



        </Head>
        <JumbotronDefault title={"Tools"} />
        <Container className="shortDownSpacer container-body">
            <Row className="row d-flex justify-content-center">
                <RenderToolCards />
            </Row>
        </Container>
    </>