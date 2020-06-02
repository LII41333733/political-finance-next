import React, { useState } from "react";
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import JumbotronDefault from '../components/jumbotrons/jumbotronDefault'
import BookOneGallery from "../components/data/bookOneGallery"
import BookTwoGallery from "../components/data/bookTwoGallery"

export default () => {
    const [showBookModal, toggleBookModal] = useState(false);
    const [showGalleryModal, toggleGalleryModal] = useState(false);
    const [book, toggleWhichBook] = useState(-1);
    const [imageIndex, toggleWhichIndex] = useState(0);
    const [showMore1, toggleShowMore1] = useState(false);
    const [showMore2, toggleShowMore2] = useState(false);
    const fileName = book === 1 ? BookOneGallery[imageIndex].fileName : BookTwoGallery[imageIndex].fileName;
    const label = book === 1 ? BookOneGallery[imageIndex].label : BookTwoGallery[imageIndex].label;

    // useEffect(() => {
    //     if (action === "bookScroll")
    //         window.scrollTo({
    //             top: 1550,
    //             behavior: 'smooth'
    //         });
    // }, []);

    const RenderTOCImages = ({ book }) => {
        const images = [];
        const limit = book === 1 ? 4 : 7;
        for (let i = 0; i < limit; i++) {
            images.push(
                <img
                    className={`toc-image${book}`}
                    key={i}
                    src={`images/book${book}/toc/${i}.jpg`}
                    alt={`tocImage`}
                />
            )
        }
        return images;
    }

    const RenderGallery = ({ book, extra }) => {
        const cards = [];
        const low = extra ? 10 : 0;
        const high = extra ? 25 : 10;
        const whichGallery = book === 1 ? BookOneGallery : BookTwoGallery;

        for (let i = low; i < high; i++) {
            cards.push(
                <Card
                    key={i}
                    id={i}
                    onClick={() => {
                        toggleWhichBook(book);
                        toggleWhichIndex(i);
                        toggleGalleryModal(true);
                    }}
                    className="bg-dark text-white galleryCard cursor mr-2 mt-4">
                    <Card.Img
                        src={whichGallery[i].fileName}
                        alt={whichGallery[i].label} />
                    <Card.ImgOverlay>
                        <Card.Text
                            className="mx-auto">
                            {whichGallery[i].label}
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            )
        }
        return cards;
    };

    const ShowMoreGallery = ({ book }) =>
        <RenderGallery
            book={book}
            extra={true} />;

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/v4-shims.css" />
            </Head>
            <JumbotronDefault title={"Books"} />
            <Container className="container-body booksContainer" style={{ marginBottom: "50px" }}>
                <Row style={{ justifyContent: "center" }}>
                    <Col>
                        <h2 className="header-sub">THE ART OF POLITICAL FINANCE</h2>
                        <h2 className="header-sub2">Volume I - Part I</h2>
                        <h2 className="header-main textColorPrimary">THE COLONIAL ERA THROUGH RECONSTRUCTION</h2>
                        <div>
                            <img
                                className="cover-books"
                                src="images/book1/front1.jpg"
                                alt="cover"
                                height="450px"
                                width="310px" />
                            <img
                                className="cover-books"
                                src="images/book1/back.png"
                                alt="cover"
                                height="450px"
                                width="310px" />
                        </div>
                        <Button
                            onClick={() => {
                                toggleBookModal(true)
                                toggleWhichBook(1);
                            }}
                            className="m-3 w-50"
                            variant="outline-dark">
                            Table of Contents</Button>
                        <a
                            target={"_blank"}
                            href="https://store.flpublishers.net/catalog/search?keyword=the+art+of+political+finance">
                            <Button
                                className="m-2 w-50 buyButton inline">Click to Purchase</Button></a>
                    </Col>
                </Row>
                <Row className="px-5">
                    <p
                        className="textBlock"
                        style={{ marginTop: "35px" }}><span className="dropcap">P</span>art I leverages over 60 illustrations by artists and publishers like Frank Leslie and his Illustrated Newspaper, Thomas Nast and Harper’s Weekly, Currier &amp; Ives, Joseph Keppler and Puck Magazine, and others to guide you through this often uninspected history. The images are a tribute to the extremely talented artists and their adroit perception of the issues. The book contains many accompanying summaries which in many cases are just as important as the surrounding text to help us understand the setting.</p>
                </Row>
                <RenderGallery book={1} />
                {showMore1
                    ? < ShowMoreGallery book={1} />
                    : <i
                        onClick={() => toggleShowMore1(true)}
                        className="fas fa-plus-circle d-block mt-2"></i>}
                <hr className="hr0 mt-5" />
                <hr className="hr1" />
                <Row style={{ justifyContent: "center" }}>
                    <Col>
                        <h2 className="header-sub">THE ART OF POLITICAL FINANCE</h2>
                        <h2 className="header-sub2">Volume I - Part II</h2>
                        <h2 className="header-main textColorPrimary">THE GILDED AGE</h2>
                        <div>
                            <img
                                className="cover-books"
                                src="images/book2/front1.jpg"
                                alt="cover"
                                height="450px"
                                width="310px" />
                            <img
                                className="cover-books"
                                src="images/book2/back.jpg"
                                alt="cover"
                                height="450px"
                                width="310px" />
                        </div>
                        <Button
                            onClick={() => {
                                toggleBookModal(true);
                                toggleWhichBook(2);
                            }}
                            className="m-3 w-50"
                            variant="outline-dark">
                            Table of Contents</Button>
                        <a
                            target={"_blank"}
                            href="https://store.flpublishers.net/catalog/search?keyword=the+art+of+political+finance">
                            <Button
                                className="m-2 w-50 buyButton inline">Click to Purchase</Button></a>
                    </Col>
                </Row>
                <Row className="px-5">
                    <p
                        className="textBlock" style={{ marginTop: "35px" }}><span className="dropcap">P</span>art II also looks at over 90 illustrations as political cartooning became more popular and more prevalent. In addition to the artists who were showcased in Part I, several more added to this Gilded Age rendition. Names like William A. Rogers, Bernhard and Victor Gillam, Frederick Opper, Grant Hamilton, Louis Dalrymple, Watson Heston, and others joined the list of artists as magazines like Judge and The Truth Seeker augmented the humor and illustrated publications of the period.</p></Row>
                <RenderGallery
                    book={2} />
                {showMore2
                    ? <ShowMoreGallery book={2} />
                    : <i
                        onClick={() => toggleShowMore2(true)}
                        className="fas fa-plus-circle d-block mt-2"></i>}
            </Container>
            <Modal
                show={showBookModal}
                onHide={() => toggleBookModal(false)}
                size={"lg"}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body
                    className={"tocBody"}
                >
                    <RenderTOCImages book={book} />
                </Modal.Body>
            </Modal>
            <Modal
                show={showGalleryModal}
                onHide={() => toggleGalleryModal(false)}
                size={"lg"}
                className={"galleryModal"}>
                <Modal.Body
                    className="mx-auto bgBlack">
                    {book > -1 &&
                        <img className="galleryModalImg" src={fileName} alt={label} />}
                </Modal.Body>
            </Modal>
        </>
    )
}