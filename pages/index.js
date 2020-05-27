import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import JumbotronHomepage from '../components/jumbotrons/jumbotronHomepage';
import HomepageCarousel from '../components/homepageCarousel';

// const isMobile = window.innerWidth <= 960;


Home.getInitialProps = async ({ req }) => {
  let userAgent;
  if (req) { // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers['user-agent'] // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent // if you are on the client you can access the navigator from the window object
  }
  let isMobile = Boolean(userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))

  return { isMobile }
}

export default function Home({ isMobile }) {
  return (
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
      {isMobile
        ? <MobileJumbotronHomepage />
        : <JumbotronHomepage />
      }
      <Container>
        <Row className="mt-5">
          <Col
            lg={7}
            className="my-auto">
            <p
              className="textBlock mr-1"
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
      </Container>
    </>);
}
