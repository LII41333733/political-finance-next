import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import JumbotronHomepage from '../components/jumbotrons/jumbotronHomepage';
import HomepageCarousel from '../components/homepageCarousel';

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export default () =>
  <>
    <JumbotronHomepage />
    <Container style={{ marginBottom: "50px" }}>
      <Row className="mt-5">
        <Col
          lg={7}
          className="my-auto">
          <p
            style={{ marginTop: "20px", marginRight: "-5px" }}
            className="textBlock"
          ><span className="dropcap">W</span>
                            ith the fallout of 2008 and now in {new Date().getFullYear()}, the current structure of the financial system under scrutiny by people the world over, scores of books, documentaries, and videos were produced to explain what happened and what our future holds. Specifically, in the United States, inflation and debt, the profits of which are reaped at the highest concentrated levels, are in question. But in order to understand the complexity of the 21<sup>st</sup>-century political economy, the domestic divisions, and the possible outcomes, like any study, it must be done at the beginning, and at the elementary level.</p>

        </Col>
        <Col lg={5} className="mt-n3">
          <HomepageCarousel />
        </Col>
      </Row>
      <Row className="mt-1">
        <Col>
          <p
            className="textBlock"
            style={{ marginTop: "10px" }}>Parts I and II of <em>The Art of Political Finance</em> confront economic philosophy touching on the differences, similarities, and conflicts between Thomas Jefferson and Alexander Hamilton, Andrew Jackson and Nicholas Biddle, and to the lesser-known ideas of Peter Cooper that often opposed financial officiating by John Sherman and his colleagues. As “capitalism” and wealth were used to apologize for transgressions against the natural laws of supply and demand and humanity, the people of the United States ceded not only to the potential of prosperity but to the peace that goes along with it. The books also analyze root causes and patterns in the commercial and banking arenas known as panics and depressions. These events, which are euphemized as business cycles, greatly affect the human experience and still require a resilient population to absorb.</p>
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