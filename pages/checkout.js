import React, { useEffect, useState, useRef } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RenderCheckoutCard from "../components/checkout/renderCheckoutCard";
import JumbotronDefault from "../components/jumbotrons/jumbotronDefault"
import EmailComponent from "../components/checkout/emailComponent"
import Button from 'react-bootstrap/Button'

import PaypalCheckout from "../components/checkout/paypalCheckout";
import Card from 'react-bootstrap/Card';



export default () => {
    const [loaded, setLoaded] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [error, setError] = useState(null);
    const [paypalContinue, setPayPalContinue] = useState(false);
    const paypalRef = useRef();
    console.log(paypalRef)
    const item = {
        name: "The “Berth” of Public Debt",
        price: 3.50,
        description: "Lesson Plan #2"
    }
    const makeNewChildren = () => {
        paypalRef.current.innerHTML = '';
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: "Lesson Plan #2",
                                amount: {
                                    currency_code: 'USD',
                                    value: 3.50,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setShowConfirmation(true);
                    console.log(order);
                },
                onError: err => {
                    setError(err);
                    console.error(err);
                },
            })
            .render(paypalRef.current);
    }

    loaded && paypalRef.current.childNodes.length < 1 && makeNewChildren()

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.API_KEY}`;
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
    }, [item.name]);

    const prod = () => {
        if (showConfirmation) {
            return (
                <div>
                    <h1>Congrats, you just bought {"Deez nuts"}!</h1>
                </div>
            );
        }

        return (
            <div>
                {error && <div>Uh oh, an error occurred! {error.message}</div>}
                <h1>
                    {"Lesson Plan"} for ${"3.50"}
                </h1>
            </div>
        );
    }



    return (
        <>
            <JumbotronDefault title={"checkout"} />
            <Container className="container-body" style={{ marginBottom: "50px" }}>
                <Row>
                    <Col lg={6} className={"ml-5"}>
                        {showConfirmation
                            ? prod()
                            : <>
                                <EmailComponent cb={setPayPalContinue} />
                                <Card
                                    border={"dark"}
                                    className={`p-3 my-3 ml-5 ${!paypalContinue && `paypalOverlay`}`}>
                                    <h3 className="schadow"><strong>2. Select Payment</strong>  -  Complete your purchase with <br /> either of the below options:</h3>
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
                            </>
                        }
                    </Col>
                    <Col className={"float-left"} lg={5}>
                        <RenderCheckoutCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}