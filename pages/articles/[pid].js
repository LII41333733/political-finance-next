import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import JumbotronDefault from "../../components/jumbotrons/jumbotronDefault";
//import articles from '../../components/data/articles'
import { scrollToTop, scrollToArticle } from "../../components/utils/functions/scrollToTop"
import Head from 'next/head'
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { withRouter } from 'next/router';
import moment from "moment";

const client = require('contentful').createClient({
    space: "sa1dyqzyb7zu",
    //space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    //accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    accessToken: "Fr2U2Ge3ToiX7PTNOjilHDg5CUpVR4JijHkYQ3VAM04"
})

//525x150
export function Articles({ router }) {
    const articleIndex = router.query.pid - 1;
    const [posts, setPosts] = useState([{
        thumb: "",
        meta: "",
        title: "",
        short: "",
        date: "",
        footer: "",
        body: []
    }]);

    async function fetchEntries() {
        const entries = await client.getEntries()
        if (entries.items) return entries.items
        console.log(`Error getting Entries for ${contentType.name}.`)
    }

    const [loadCount, setLoadCount] = useState(0);

    console.log(`-------------`)
    console.log(router)
    console.log(router.pathname)
    console.log()
    console.log(`-------------`)

    // console.log("---------")
    // console.log(router)
    // console.log(router.query)
    // console.log(Object.keys(router.query).length)
    // console.log("---------")

    useEffect(() => {
        async function getPosts() {
            const allPosts = await fetchEntries();

            const mappedPosts = allPosts
                .map(e => {
                    return {
                        thumb: e.fields.articleThumbnail.fields.file.url,
                        meta: e.fields.metaImage.fields.file.url,
                        title: e.fields.title,
                        short: e.fields.shortDescription,
                        date: moment(e.fields.date).format("LL"),
                        footer: e.fields.footer,
                        body: e.fields.body.content.map(e => {
                            switch (e.nodeType) {
                                case "embedded-asset-block":
                                    return <p><img
                                        className="articleImg"
                                        src={e.data.target.fields.file.url} /></p>;
                                    break;
                                case "paragraph":
                                    const isItalic = e.content[0].marks.length > 0 && e.content[0].marks[0].type === "italic";
                                    return (
                                        <p
                                            dangerouslySetInnerHTML={{ __html: e.content[0].value }}
                                            className={`${isItalic && "isItalic"} text-left`} />
                                    );
                                    break;
                            }
                        })
                    }
                })
                .sort((a, b) => moment(a.date).format("YYYYMMDD") - moment(b.date).format("YYYYMMDD"))
            setPosts(mappedPosts);
        }
        getPosts();
        //scrollToArticle();
    }, [])
    console.log(posts.length)
    console.log(articleIndex)
    return posts.length < 0
        ? <div></div>
        : <>
            <Head>
                <title>{posts[articleIndex].title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content={posts[articleIndex].title} />
                <meta property="og:description" content={posts[articleIndex].short} />
                <meta property="og:image" content={posts[articleIndex].body[0]} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="628" />
                <meta property="og:url" content={`http://www.billpacello.com/articles/7`} />
                {/* <meta property="og:url" content={`http://www.billpacello.com/articles/${router.query.pid}`} /> */}
                <meta property="og:type" content="website" />
            </Head>
            <JumbotronDefault title={"Articles"} />
            <Container
                className={`container-body`}
                style={{ paddingBottom: "50px" }}>
                <Row style={{ justifyContent: "center" }}>
                    <RenderArticles
                        articles={posts} />
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
                        article={posts[articleIndex]} />
                </Row>
            </Container>
        </>
}

export default withRouter(Articles);

export const RenderArticles = ({ articles }) => {
    return articles.map((a, i) => {
        const { thumb, title, date } = a;
        return (
            <Link
                key={title}
                href={`/articles/${i + 1}`}
                as={`/articles/${i + 1}`}>
                <div
                    key={i}
                    className="articleCard hoverZoom cursor m-2"
                    style={{
                        backgroundImage: `url(${thumb})`,
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

export const DisplayArticle = ({ article }) => {
    const { title, date, body, footer } = article;

    return (
        <div className={`slimContain articlesContainer`}>
            <h2 className="textColorPrimary toolsTitle textCenter schadow">{title.toUpperCase()}</h2>
            <div className={"text-center"}>
                <p className={"d-inline mr-2"}>Bill Pacello</p>
                <p className={"d-inline"}>{moment(date).format("LL")}</p>
            </div>
            {body}
            {footer && <div className={"footerDash mt-5 mb-1"}></div>}
            <p className={"textLeft"} dangerouslySetInnerHTML={{ __html: footer }} />
        </div>
    )
}