import React, { useEffect, useState, useRef } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RenderCheckoutCard from "../components/checkout/renderCheckoutCard";
import JumbotronDefault from "../components/jumbotrons/jumbotronDefault"
import EmailComponent from "../components/checkout/emailComponent"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Link from "next/link";

import timelines from "../components/data/timelines"
import lessonPlans from "../components/data/lessonPlans"

export default () => {
    const [action, setAction] = useState(null);
    // const [loaded, setLoaded] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [error, setError] = useState(null);
    const [paypalContinue, setPayPalContinue] = useState(false);
    const [donatorName, setDonatorName] = useState(null);
    const [donatorValue, setDonatorValue] = useState("");
    const [email, setEmail] = useState("");
    const [orderDetails, setOrderDetails] = useState(null);
    const paypalRef = useRef();
    const makeNewChildren = () => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: action.title,
                                amount: {
                                    currency_code: 'USD',
                                    value: donatorValue || action.price || 3.50,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setOrderDetails(order)
                    setShowConfirmation(true);
                    // setLoaded(false);
                },
                onError: err => {
                    setError(err);
                    console.error(err);
                },
            })
            .render(paypalRef.current);
    }
    const loadPaypalScript = () => {
        const script = document.createElement("script");

        // live
        script.src = `https://www.paypal.com/sdk/js?client-id=AXjc_WlhpGSk4-4cIFxadDfdV1OPzOtLuZKRJ7iaCUSjFEGyzJSj178EztDKesH72lul9D8OxZZQajXo`;

        //sand
        // script.src = `https://www.paypal.com/sdk/js?client-id=AZILohc0HD2gaHUBuQyBd94qxd5D9z4tSjH0BvEAXWqgKxwLAfiT0-dHIAB1DoxWTAN-LIH0YiAFzQyg`;

        script.addEventListener("load", () => {
            // setLoaded(true);
            makeNewChildren();

        });
        document.body.appendChild(script);

    }
    const formatAMPM = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    const purchaseConfirmation = (details) => {
        const date = new Date(orderDetails.create_time);
        const parsedDate = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
        const parsedTime = formatAMPM(date);

        if (action === "donation") {
            return (
                <div className="nav-link-confirm">
                    <h2>{`Confirmed!`}</h2><br />
                    <h2>{`Thank you very much for your support!`}</h2>
                    <h2>Your order details are listed below:</h2>
                    <h3>{`Confirmation ID: ${orderDetails.id}`}</h3>
                    <h3>{`Date & Time: ${parsedDate} ${parsedTime}`}</h3>
                    <h3>{`Amount: $${donatorValue.toFixed(2)}`}</h3><br />

                    <Link href={"/home"}>
                        <Button
                            className="mb-4"
                            size="lg"
                            variant="dark">
                            {"Return to Home"}
                        </Button>
                    </Link>
                </div>
            );
        }
        return (
            <div className="nav-link-confirm">
                <h2>{`Confirmed!`}</h2><br />
                <h2>{`You just bought`}</h2>
                <h2>{`${details.title}`}</h2><br />
                {/* <h2>{`${details.title} - Lesson Plan #${details.index}`}</h2><br /> */}
                <h2>Your order details are listed below:</h2>
                <h3>{`Confirmation ID: ${orderDetails.id}`}</h3>
                <h3>{`Date & Time: ${parsedDate} ${parsedTime}`}</h3>
                <h3>{`Amount: $${donatorValue.toFixed(2) || "3.50"}`}</h3><br />
                <h2>Click the "Download" button to obtain your contents.</h2>
            </div>
        );
    }
    const renderPaypalCard = () =>
        <Card
            border={"dark"}
            className={`p-3 my-3 ml-5 ${!paypalContinue && `paypalOverlay`}`}>
            {action === "donation"
                ? <h3 className="schadow">
                    <strong>Select Payment</strong>  -  Complete your donation with <br /> either of the below options:</h3>
                : <h3 className="schadow">
                    <strong>Select Payment</strong>  -  Complete your purchase with <br /> either of the below options:</h3>}
            <Button
                variant={"dark"}
                size="sm"
                className={"mx-auto mb-3 mt-3 checkoutBtnDownload w-80 not-allowed"}
                onClick={makeNewChildren}
            >
                {"Refresh Payment Methods"}
            </Button>
            <div ref={paypalRef} />
        </Card>
    const donationComponent = () => {
        return (
            <Container className="container-body">
                <Row>
                    <Col lg={6} className={"mx-auto"}>
                        <Card
                            border={"dark"}
                            className={`p-3 my-3 ml-5`}>
                            <div className="p-0">
                                <h3 className="schadow"><strong>Name (Optional)</strong></h3>
                                <input
                                    className={"w-100 mb-2"}
                                    name={"donatorName"}
                                    value={donatorName}
                                    onChange={(e) => setDonatorName(e.target.value)}
                                />
                                <h3 className="schadow"><strong>Email (Optional)</strong></h3>
                                <input
                                    className={"w-100 mb-2"}
                                    name={"email"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <h3 className="schadow"><strong>Amount to Contribute ($)</strong></h3>
                                <input
                                    className={"w-100 mb-2"}
                                    name={"donatorValue"}
                                    value={donatorValue}
                                    type={"number"}
                                    onChange={(e) => setDonatorValue(e.target.value)}
                                />
                                <Button
                                    variant={"dark"}
                                    size="sm"
                                    className={" mt-3 checkoutBtnDownload w-80 not-allowed"}
                                    onClick={() => {
                                        setPayPalContinue(true);
                                    }}>
                                    {"Continue to Pay"}
                                </Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
                {paypalContinue &&
                    <Row>
                        <Col lg={6} className={"mx-auto"}>
                            {renderPaypalCard()}
                        </Col>
                    </Row>}
            </Container >
        )
    }
    const purchaseComponent = () =>
        <Container className="container-body">
            <Row>
                <Col lg={6} className={`mx-auto`}>
                    {showConfirmation
                        ? purchaseConfirmation(action)
                        : renderPaypalCard()
                    }
                    {/* <EmailComponent cb={setPayPalContinue} /> */}
                </Col>
                <Col className={"float-left"} lg={5}>
                    <RenderCheckoutCard
                        showConfirmation={showConfirmation}
                        data={action}
                    />
                </Col>
            </Row>
        </Container>
    const getData = () => {
        const key = window.location.href.split("/").reverse()[1];
        const index = window.location.href.split("/").reverse()[0];

        key === "lessons"
            ? setAction(lessonPlans[index - 1])
            : setAction(timelines[index - 1]);
    }

    error !== null && alert(error);



    useEffect(() => {
        if (!paypalContinue) {
            window.location.href.split("/").includes("donation")
                ? setAction("donation")
                : getData()
        }
        loadPaypalScript();
    }, []);

    return (
        <>
            {action &&
                <>
                    <JumbotronDefault
                        title={action === "donation" ? "Encourage and Support Independent Analysis" : "Checkout"}
                        classes={action === "donation" && "textSize-6"} />
                    {action === "donation"
                        ? (
                            showConfirmation
                                ? purchaseConfirmation(orderDetails)
                                : donationComponent()
                        )
                        : purchaseComponent()}
                </>}
        </>
    )
}