import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import JumbotronDefault from "../components/jumbotrons/jumbotronDefault";
import RenderLessonCards from "../components/utils/renderLessonCards";
import Modal from 'react-bootstrap/Modal'
import lessonPlans from "../components/data/lessonPlans"
import Head from 'next/head'

export default () => {
    const [modalIndex, setModalIndex] = useState(-1)

    return (
        <div>
            <Head>
                <title>Lesson Plans for 19th-Century History</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content={"Lesson Plans for 19th-Century History"} />
                <meta property="og:description" content={"Lessons for The Art of Political Finance for students who want to study the back pages of the history of the United States."} />
                <meta property="og:image" content={"https://www.billpacello.com/images/lessons/1/thumb.png"} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="628" />
                <meta property="og:url" content={`https://www.billpacello.com/lessons`} />
                <meta property="og:type" content="website" />
            </Head>
            <JumbotronDefault title={"Lesson Plans"} />
            <Container
                className="container-body"
                style={{ marginBottom: "50px" }}>
                <div className="lessonDescDiv textLeft">
                    Lesson plans are packaged in a <strong>{".zip"}</strong> file as they contain several files that are pertinent to the lesson plan. <br />After downloading the file you will look to <strong>{"extract"}</strong> the files in order to access the content. <br /> You can expect the extracted files to be in either <strong>.pdf, .doc or .xls</strong>.
                </div>
                <Row
                    className="d-flex justify-content-center">
                    <RenderLessonCards
                        setModalIndex={setModalIndex}
                    />
                    <Modal
                        centered
                        show={modalIndex > -1
                        }
                        onHide={() => setModalIndex(-1)}
                        size={"lg"} >
                        <Modal.Body
                            className={""}
                        >
                            {modalIndex > -1 && <p>{lessonPlans[modalIndex].description}</p>}
                        </Modal.Body>
                    </Modal >
                </Row>
            </Container>
        </div>
    )
}