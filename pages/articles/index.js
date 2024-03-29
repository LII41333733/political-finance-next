import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import JumbotronDefault from "../../components/jumbotrons/jumbotronDefault";
import articles from "../../components/data/articles";
import { scrollToTop } from "../../components/utils/functions/scrollToTop";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ContentfulClient } from "../../components/utils/contentfulOptions";

// Articles.getInitialProps = async ({ req }) => {
//   let userAgent;
//   if (req) {
//     // if you are on the server and you get a 'req' property from your context
//     userAgent = req.headers["user-agent"]; // get the user-agent from the headers
//   } else {
//     userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
//   }
//   let isMobile = Boolean(
//     userAgent.match(
//       /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
//     )
//   );

//   return { isMobile };
// };

// export async function getStaticPaths() {
//   const posts = await ContentfulClient.getEntries();

//   // const paths = posts.items
//   //     .map((post) => ({
//   //         params: { id: post.id },
//   //     }))

//   const posts_ = posts.items.filter((e) => e.fields.metaImage !== undefined);
//   const paths = posts_.map((post) => ({
//     params: { pid: post.fields.id.toString() },
//   }));

//   return { paths, fallback: false };
// }

export async function getStaticProps({ params }) {
  const posts = await ContentfulClient.getEntries();
  const posts_ = posts.items
    .filter((e) => e.fields.metaImage !== undefined)
    .sort((a, b) => a.fields.id - b.fields.id);

  console.log(posts_);
  debugger;

  return {
    props: {
      posts: posts_,
      id: Number(params?.pid),
    },
  };
}

export default function Articles({ posts, id }) {
  const router = useRouter();
  const isMobile = false;
  console.log(posts);
  console.log(id);

  const i = articles.length - 1;
  const [articleIndex, setArticleIndex] = useState(i);
  const articleSelected = articleIndex > -1;

  React.useEffect(() => {
    if (posts.length > 1) {
      router.push(`/articles/${posts.length}`);
    }
  }, []);

  const RenderArticles = ({ articles }) => {
    return articles.map((a, i) => {
      const { thumbSrc, title, date, id } = a;
      return (
        <Link href={`/articles/${id}`}>
          <div
            key={i}
            className="articleCard hoverZoom cursor m-2"
            style={{
              backgroundImage: `url(${thumbSrc})`,
              backgroundSize: `cover`,
            }}
          >
            <div className={"mb-2 px-2 articleCardInfo"}>
              <div className="articleCardItem articleCardDetails">{`Bill Pacello ● ${date}`}</div>
              <div className="articleCardItem articleCardTitle">{title}</div>
            </div>
          </div>
        </Link>
      );
    });
  };
  const DisplayArticle = ({ articles, articleIndex }) => {
    const article = articles[articleIndex];
    const { title, date, body, footer, src, imageCaption } = article;
    return (
      <div className={`${isMobile ? "p-3" : "slimContain"} articlesContainer`}>
        <h2 className="textColorPrimary toolsTitle textCenter schadow">
          {title.toUpperCase()}
        </h2>
        <div>
          <p className={"d-inline mr-2"}>Bill Pacello</p>
          <p className={"d-inline"}>{date}</p>
        </div>
        {body}
        {footer && <div className={"footerDash mt-5 mb-1"}></div>}
        {footer}
      </div>
    );
  };
  return (
    <>
      <Head>
        <title>{articles[i].title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={articles[i].title} />
        <meta property="og:description" content={articles[i].short} />
        <meta property="og:image" content={articles[i].metaSrc} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta
          property="og:url"
          content={`https://www.billpacello.com/articles`}
        />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://www.billpacello.com/favicon.ico"
        />
      </Head>
      <JumbotronDefault title={"Articles"} />
      <Container className={`container-body`} style={{ paddingBottom: "50px" }}>
        <Row style={{ justifyContent: "center" }}>
          <RenderArticles articles={articles} />
        </Row>
        <hr className="hr0" />
        <hr className="hr1" />
        {!isMobile && (
          <div className="upBtnCircle cursor" onClick={scrollToTop}>
            <span className="upArrow">↑</span>
          </div>
        )}
        <Row>
          {articleSelected && (
            <DisplayArticle articles={articles} articleIndex={articleIndex} />
          )}
        </Row>
      </Container>
    </>
  );
}
