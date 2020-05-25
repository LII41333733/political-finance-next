import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import JumbotronDefault from "../Components/Jumbotrons/JumbotronDefault";

export default () =>
    <>
        <JumbotronDefault title={"About"} />
        <Container className="container-body slimContain" style={{ marginBottom: "50px" }}>
            <Row>
                <Col>
                    <p className="textBlock">This site was developed in support of my books entitled The Art of Political Finance with corresponding lesson plans, and other teaching and learning tools for history buffs, students, teachers, parents, and home schoolers in an effort to help orient students and people to their environment, often referred to as the political economy.  In addition to the lesson plans, some of the tools will include timelines, calculators, planning models, and other items that will help facilitate that orientation.</p>

                    <p className="textBlock">The body of Volume I, Parts I and II is 686 pages but you should not let that deter you or your students from reading it. There are over 150 illustrations from the period, mostly, Currier & Ives, Harper's Weekly, Frank Leslie’s Illustrated, Puck, and others, along with summaries.  They provide some of the basis for the topics, and an entertaining perspective on the subject.  If a picture is truly worth a thousand words, then these illustrations provide the equivalent of 150,000 pages of text, but with the advantage of graphic facilitation.</p>

                    <p className="textBlock">As visual learning becomes more prevalent, according to Huffington Post, Forrester Research estimates one minute of online video equates to approximately 1.8 million written words. In addition, 90 percent of information transmitted to the brain is visual, and visuals are processed 60,000 times faster in the brain than text. This indicates visual education aids like video can improve learning styles and increase the rate at which we retain information.</p>

                    <a target="_blank" href="https://www.huffpost.com/entry/research-confirms-video-i_b_5064181">Click Here to View Article on Video Learning</a>

                </Col>
            </Row>
        </Container>
    </>