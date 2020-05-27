import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import JumbotronDefault from "../components/jumbotrons/jumbotronDefault";

export default () =>
    <>
        <JumbotronDefault title={"About"} />
        <Container className="slimContain">
            <Row>
                <Col>
                    <p className="textBlock">This site was developed in support of my books entitled The Art of Political Finance with corresponding lesson plans, and other teaching and learning tools for history buffs, students, teachers, parents, and home schoolers in an effort to help orient students and people to their environment, often referred to as the political economy.  In addition to the lesson plans, some of the tools will include timelines, calculators, planning models, and other items that will help facilitate that orientation.</p>

                    <p className="textBlock">The body of Volume I, Parts I and II is 686 pages but you should not let that deter you or your students from reading it. There are over 150 illustrations from the period, mostly, Currier & Ives, Harper's Weekly, Frank Leslie’s Illustrated, Puck, and others, along with summaries.  They provide some of the basis for the topics, and an entertaining perspective on the subject.  If a picture is truly worth a thousand words, then these illustrations provide the equivalent of 150,000 pages of text, but with the advantage of graphic facilitation.</p>

                    <p className="textBlock">As visual learning becomes more prevalent, according to Huffington Post, Forrester Research estimates one minute of online video equates to approximately 1.8 million written words. In addition, 90 percent of information transmitted to the brain is visual, and visuals are processed 60,000 times faster in the brain than text. This indicates visual education aids like video can improve learning styles and increase the rate at which we retain information.</p>

                    <a target="_blank" href="https://www.huffpost.com/entry/research-confirms-video-i_b_5064181">Click Here to View Article on Video Learning</a>

                </Col>
            </Row>
            <hr className="hr0" />
            <hr className="hr1" />
            <Row>
                <Col className="my-auto">
                    <h2 className="author">About the Author</h2>
                    <p className="textBlock mt-2"><span className="dropcap">B</span><strong>ill Pacello</strong> was born in 1963 and grew up in the 1970s in the small town of Audubon, New Jersey. Bill
                        graduated from Audubon High School in 1981 and received his Bachelor of Arts degree in business from
                        Rutgers University in 1986. While attending both of those institutions, he spent a significant amount of his
                        energy on the baseball field toward a well-rounded life and achieved area and state honors.</p>
                    <p className="textBlock">After working in the waste, construction, and electronics industries, Bill returned to Rowan University in 1993
                    where he received a public school teaching certification. During his post-baccalaureate study, he began to
                    develop computer skills and found work in the information technology department at a chemical company in
                    Philadelphia. There he began learning the SAP enterprise system and soon embarked on a consulting career
                    at IBM. After a few years of travel and settling in at one of its service delivery centers, his assignment and his
                    time at IBM had run its course. Although treated well, the life behind a computer all day in a cubicle, office, or
                    boiler room with no natural light began to weigh on his soul and his psyche. So, in 2005, faced with the
                    prospect of being on an airplane every week for a second stint, he left IBM for a new life as an entrepreneur
                    trying to capitalize on the motorcycle, tattoo, and t-shirt embellishment trend. The irony was that he had to
                    leave one of the most esteemed companies in the information industry that offered many opportunities within
                    the IT sphere to explore an untapped part of his brain. But creativity and business experience was not enough
                    to compete with low international labor rates and distribution channels leveraged by the highly capitalized retail
                        giants in the 21<sup>st</sup>-century “go big or go home” commercial arena.</p>
                    <p className="textBlock">These experiences, along with Pacello’s non-political affiliation and effort to adhere to the Christian faith, have
                    fueled a perspective that will cut into both sides of the mainstream narrative. His first two books, The Art of
                    Political Finance Part I and II, show the unfolding and proliferation of fiat currency and debt in early America
                    and how it began to undermine individual freedom, liberty, national independence, and spirit, prior to the
                    establishment of the Federal Reserve. The research and analysis provide an alternative for readers and young
          Americans so that they may better understand the 21<sup>st</sup>-century bazaar, especially in an America with ratcheted
          discord after events like 911 and the “Great Recession” where each generation seems to be more apt to
consumption and predation than the former.</p>
                    <a
                        target={"_blank"}
                        href="#">
                        <Button
                            className="m-2 w-50 buyButton inline">Encourage and Support Independent Analysis</Button></a>
                </Col>
            </Row>
        </Container>
    </>