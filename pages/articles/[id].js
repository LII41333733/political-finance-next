import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import JumbotronDefault from "../../components/jumbotrons/jumbotronDefault";
import articles from '../../components/data/articles'
import { scrollToTop } from "../../components/utils/functions/scrollToTop"
import Head from 'next/head'
import { useRouter } from 'next/router'

Articles.getInitialProps = async ({ req }) => {
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

//525x150
export default function Articles({ isMobile }) {
    const router = useRouter()
    const { id } = router.query

    const [articleIndex, setArticleIndex] = useState(-1);
    const articleSelected = articleIndex > -1;

    useEffect(() => {
        setArticleIndex(0);
    }, []);

    const RenderArticles = ({ articles }) => {
        return articles.map((a, i) => {
            const { thumbSrc, title, date } = a;
            return <div
                onClick={() => setArticleIndex(i)}
                key={i}
                className="articleCard hoverZoom cursor m-2"
                style={{
                    backgroundImage: `url(${thumbSrc})`,
                    backgroundSize: `cover`
                }}>
                <div className={"mb-2 px-2 articleCardInfo"}>
                    <div className="articleCardItem articleCardDetails">{`Bill Pacello ● ${date}`}</div>
                    <div className="articleCardItem articleCardTitle">{title}</div>
                </div>
            </div>

        })
    }

    const DisplayArticle = ({ articles, articleIndex }) => {
        const article = articles[articleIndex];
        const { title, date, body, footer } = article;
        return (
            <div className={`${isMobile ? "p-3" : "slimContain"} articlesContainer`}>
                <h2 className="textColorPrimary toolsTitle textCenter schadow">{title.toUpperCase()}</h2>
                <div className={"text-center"}>
                    <p className={"d-inline mr-2"}>Bill Pacello</p>
                    <p className={"d-inline"}>{date}</p>
                </div>
                <div>
                    <img
                        className={"articleImg"}
                        src={article.src} />
                    {body}
                    {footer && <div className={"footerDash mt-5 mb-1"}></div>}
                    {footer}
                </div>
            </div>
        )
    }
    console.log("==========================")
    console.log(parseInt(id))
    const i = parseInt(id) - 1;
    console.log(articles)
    console.log(i)
    return (
        <>
            <Head>
                {/* <title>{articles[i].title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content={articles[i].title} />
                <meta property="og:description" content={articles[i].short} />
                <meta property="og:image" content={articles[i].title.thumbSrc} />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="199" />
                <meta property="og:url" content={`https://www.billpacello.com/articles/${i}`} /> */}

                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content={"The Revelations of COVID-19"} />
                <meta property="og:description" content={"Two months ago, I wrote an article entitled, The Coronavirus: Your Money or Your Life, discussing where officials and capitalists were weighing and questioning the severity of COVID- 19 against the economic impact..."} />
                {/* <meta property="og:image" content={"/images/articles/coronavirus-thumb2.png"} /> */}
                {/* <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="199" /> */}
                <meta property="og:url" content={`https://www.billpacello.com/articles/1`} />
            </Head>
            <JumbotronDefault title={"Articles"} />
            <Container
                className={`container-body`}
                style={{ paddingBottom: "50px" }}>
                <Row style={{ justifyContent: "center" }}>
                    <RenderArticles
                        articles={articles} />
                </Row>
                <hr className="hr0" />
                <hr className="hr1" />
                {!isMobile &&
                    <div
                        className="upBtnCircle cursor"
                        onClick={scrollToTop}>
                        <span className="upArrow">↑</span>
                    </div>}
                <Row>
                    {articleSelected &&
                        <DisplayArticle
                            articles={articles}
                            articleIndex={articleIndex} />}
                </Row>
            </Container>
        </>
    )
}