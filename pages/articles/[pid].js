import React, { useState, useEffect } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import JumbotronDefault from "../../components/jumbotrons/jumbotronDefault";
import { scrollToTop, scrollToArticle } from "../../components/utils/functions/scrollToTop"
import Head from 'next/head'
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { withRouter } from 'next/router';
import moment from "moment";
import { Options, ContentfulClient } from "../../components/utils/contentfulOptions";

//525x150
export function Articles() {
    const router = useRouter();
    const [posts, setPosts] = useState([{
        thumb: "",
        meta: "",
        title: "",
        short: "",
        date: "",
        footer: "",
        body: []
    }]);

    const [articleIndex, setIndex] = useState(null);

    async function fetchEntries() {
        const entries = await ContentfulClient.getEntries();
        if (entries.items) return entries.items
        console.log(`Error getting Entries for ${contentType.name}.`)
    }

    useEffect(() => {
        async function getPosts() {
            const allPosts = await fetchEntries();
            console.log(allPosts)
            const mappedPosts = allPosts
                .filter(e => e.fields.price === undefined)
                .map(e => {
                    console.log(e)
                    // debugger;
                    return {
                        thumb: e.fields.articleThumbnail.fields.file.url,
                        meta: e.fields.metaImage.fields.file.url,
                        title: e.fields.title,
                        short: e.fields.shortDescription,
                        date: moment(e.fields.date).format("LL"),
                        footer: documentToReactComponents(e.fields.footer, Options),
                        body: documentToReactComponents(e.fields.body, Options)
                    }
                })
                .sort((a, b) => moment(a.date).format("YYYYMMDD") - moment(b.date).format("YYYYMMDD"))
            setPosts(mappedPosts);
        }
        getPosts();
    }, [])

    useEffect(() => {
        setIndex(parseInt(router.query.pid) - 1)
        setPosts(posts)
    }, [router]);

    useEffect(() => {
        scrollToArticle();
    })


    return (articleIndex !== null && posts.length > 1)
        ? <>
            <Head>
                <title>{posts[articleIndex].title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content={posts[articleIndex].title} />
                <meta property="og:description" content={posts[articleIndex].short} />
                <meta property="og:image" content={posts[articleIndex].meta} />
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
        : < div></div>
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
                    key={title}
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
            {footer}
        </div>
    )
}