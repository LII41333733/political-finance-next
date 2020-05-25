import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import JumbotronDefault from "../Components/Jumbotrons/JumbotronDefault";
import iaqs from '../components/data/iaqs'

export default () =>
    <>
        <JumbotronDefault title={"iaqs"} />
        <Container className="container-body slimContain" style={{ marginBottom: "50px" }}>
            <Row>
                <Col>
                    <p className={"textBlock"}>IAQs are sometimes the deeper—but not always—“infrequently asked questions” on a topic as contrasted with FAQs. Hopefully, some of these questions will evoke thoughts that will urge you to become more oriented to your external environment—known as the political economy at this time—and to read my books that were written with this objective in mind.</p>
                    {iaqs.map((e, i) => <p key={i} className={`text-left ${[1, 2, 3, 4, 5].includes(i) && `ml-5`}`} onClick={() => false}>{`- ${e}`}</p>)}
                </Col>
            </Row>
        </Container>
    </>