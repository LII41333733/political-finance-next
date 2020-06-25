import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import JumbotronDefault from "../../components/jumbotrons/jumbotronDefault";
import articles from '../../components/data/articles'
import { scrollToTop } from "../../components/utils/functions/scrollToTop"
import Head from 'next/head'
import Link from "next/link";

const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

//525x150
export default function Articles() {
    async function fetchEntries() {
        const entries = await client.getEntries()
        if (entries.items) return entries.items
        console.log(`Error getting Entries for ${contentType.name}.`)
    }

    const [articleIndex, setArticleIndex] = useState(null);
    const [posts, setPosts] = useState([])

    if (posts.length > 0) {
        console.log(posts)
        debugger;
    }

    useEffect(() => {
        async function getPosts() {
            const allPosts = await fetchEntries()
            setPosts([...allPosts])
        }
        getPosts()



        const index = window.location.href.split("/").reverse()[0];
        setArticleIndex(parseInt(index) - 1);
    }, [articleIndex]);





    const RenderArticles = ({ articles }) => {
        return articles.map((a, i) => {
            const { thumbSrc, title, date } = a;
            return (
                <Link href={`/articles/${i + 1}`}>
                    <div
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
                </Link>
            )
        })
    }

    const DisplayArticle = ({ articles, articleIndex }) => {
        const article = articles[articleIndex];
        const { title, date, body, footer, src, imageCaption } = article;

        return (
            <div className={`slimContain articlesContainer`}>
                <h2 className="textColorPrimary toolsTitle textCenter schadow">{title.toUpperCase()}</h2>
                <div className={"text-center"}>
                    <p className={"d-inline mr-2"}>Bill Pacello</p>
                    <p className={"d-inline"}>{date}</p>
                </div>
                <div>
                    <div className="float-left">
                        <img
                            className={"articleImg"}
                            src={src} />
                        {imageCaption}
                    </div>
                    {body}
                    {footer && <div className={"footerDash mt-5 mb-1"}></div>}
                    {footer}
                </div>
            </div>
        )
    }



    return (
        <>
            {articleIndex !== null &&
                <>
                    <Head>
                        <title>{articles[articleIndex].title}</title>
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                        <meta property="og:title" content={articles[articleIndex].title} />
                        <meta property="og:description" content={articles[articleIndex].short} />
                        <meta property="og:image" content={articles[articleIndex].metaSrc} />
                        <meta property="og:image:width" content="1200" />
                        <meta property="og:image:height" content="628" />
                        <meta property="og:url" content={`https://www.billpacello.com/articles/${articleIndex}`} />
                        <meta property="og:type" content="website" />
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
                        <div
                            className="upBtnCircle cursor"
                            onClick={scrollToTop}>
                            <span className="upArrow">↑</span>
                        </div>
                        <Row>
                            <DisplayArticle
                                articles={articles}
                                articleIndex={articleIndex} />
                        </Row>
                    </Container>
                </>
            }
        </>
    )
}