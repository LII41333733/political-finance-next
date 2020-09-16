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

export async function getStaticPaths() {
    const posts = await ContentfulClient.getEntries();

    // const paths = posts.items
    //     .map((post) => ({
    //         params: { id: post.id },
    //     }))

    const posts_ = posts.items.filter(e => e.fields.metaImage !== undefined)
    const paths = posts_.map((post) => ({
        params: { pid: post.fields.id.toString() },
    }));

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const posts = await ContentfulClient.getEntries();
    const posts_ = posts.items
        .filter(e => e.fields.metaImage !== undefined)
        .sort((a, b) => a.fields.id - b.fields.id);

    return {
        props: {
            posts: posts_,
            id: Number(params.pid)
        }
    }
}

//525x150
export function Articles({ posts, id }) {
    const posts_ = posts.map(e => {
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

    const currentPost = posts_[id - 1];

    useEffect(() => {
        scrollToArticle();
    })

    return (
        <>
            <Head>
                <title>{currentPost.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content={currentPost.title} />
                <meta property="og:description" content={currentPost.short} />
                <meta property="og:image" content={currentPost.meta} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="628" />
                <meta property="og:url" content={`http://www.billpacello.com/articles/${id}`} />
                <meta property="og:type" content="website" />
            </Head>
            <JumbotronDefault title={"Articles"} />
            <Container
                className={`container-body`}
                style={{ paddingBottom: "50px" }}>
                <Row style={{ justifyContent: "center" }}>
                    <RenderArticles
                        articles={posts_} />
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
                        article={currentPost} />
                </Row>
            </Container>
        </>
    )
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
    console.log(article)
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