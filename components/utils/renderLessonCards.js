import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import Link from "next/link";
import lessonPlans from "../../components/data/lessonPlans";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Options, ContentfulClient, getLessons } from "./contentfulOptions";

//275 x 170
export default ({ setModalIndex }) => {
  const router = useRouter();
  const [posts, setPosts] = useState([
    {
      id: 0,
      title: "",
      price: 0,
      media: "",
      image: "",
      description: "",
    },
  ]);

  async function fetchEntries() {
    const entries = await ContentfulClient.getEntries();
    console.log(entries);
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      setPosts(getLessons(allPosts));
    }
    getPosts();
  }, []);

  useEffect(() => {
    setPosts(posts);
  }, [router]);

  return posts.map((e, i) => {
    const { image, title, media, price } = e;
    return (
      <div className="d-inline-block" key={title}>
        <Card border={"dark"} className={`toolCard p-0 d-inline-block m-3`}>
          <div
            onClick={() => setModalIndex(i)}
            className="infoBtnCircle cursor"
          >
            <div className="infoIcon">i</div>
          </div>
          <Card.Img variant="top" src={image} />
          <Card.Body className="p-0 my-auto">
            <Card.Header className="align-items-center justify-content-center d-flex mb-2">
              <div className="headerTitleDiv">
                <h5 className="m-0 preWrap">{title}</h5>
              </div>
            </Card.Header>
            {price === "0.00" ? (
              <Button
                index={i}
                className="cardButton mb-2 text-white"
                href={media}
                size="sm"
                download={title}
                variant="dark"
              >
                {"Free Download"}
              </Button>
            ) : (
              <Link href={`/checkout`} as={`/checkout/lessons/${i + 1}`}>
                <Button className="cardButton mb-2" size="sm" variant="dark">
                  {`$${price}`}
                </Button>
              </Link>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  });
};
