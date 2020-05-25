import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

export default ({ src, title, cb }) => {
    const [email, setEmail] = useState("");
    const [subscribe, setSubscribe] = useState(false);

    const disableEmail = email.includes("@") && email !== "";

    return (
        <Card
            border={"dark"}
            className={`p-3 my-3 ml-5`}>
            <h3 className="schadow"><strong>1. Your Email</strong>  -  This will be the address we send the order confirmation and purchases.</h3>
            <div className="p-0">
                <input
                    className={"w-100 mb-2"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={"float-left mt-2"}
                    type={"checkbox"}
                    name={"subscribeYes"}
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)} />
                <div className={"float-left mt-1 d-inline-block"}>Subscribe to our mailing list</div>
                <Button
                    variant={"dark"}
                    size="sm"
                    className={" mt-3 checkoutBtnDownload w-80 not-allowed"}
                    onClick={() => cb(true)}
                    disabled={!disableEmail}>
                    {"Continue to Pay"}
                </Button>
            </div>
        </Card>
    )
}