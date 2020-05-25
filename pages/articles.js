import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from "react";
import JumbotronDefault from "../Components/Jumbotrons/JumbotronDefault";
import articles from '../components/data/articles'

//525x150
export default () => {
    const [articleIndex, setArticleIndex] = useState(-1);

    useEffect(() => {
        setArticleIndex(3);
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
            <div className="slimContain articlesContainer">
                <h2 className="textColorPrimary schadow textCenter">{title.toUpperCase()}</h2>
                <div style={{ height: "50px" }}>
                    <p className={"d-inline mr-2 float-right"}>Bill Pacello</p><p className={"d-inline mr-5 float-right"}>{date}</p>
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

    const resetWindow = () => {
        window.scrollTo({ top: 200, behavior: "smooth" });
    }

    const articleSelected = articleIndex > -1;

    return (
        <div>
            <JumbotronDefault title={"Articles"} />
            <Container className={`container-body textLeft mb-5`}>
                {/* {articleIndex > -1 &&
                    <div
                        className="backBtnCircle cursor"
                        onClick={() => setArticleIndex(-1)}>
                        <span className="backArrow">↩</span>
                    </div>} */}
                <Row style={{ justifyContent: "center" }}>
                    <RenderArticles
                        articles={articles} />
                </Row>
                <hr className="hr0" />
                <hr className="hr1" />
                <div
                    className="upBtnCircle cursor"
                    onClick={() => resetWindow()}>
                    <span className="upArrow">↑</span>
                </div>
                <Row>
                    {articleSelected &&
                        <DisplayArticle
                            articles={articles}
                            articleIndex={articleIndex} />}
                </Row>
            </Container>
        </div>
    )
}