import React from "react";
import {Button, Input, LargeTitle, Section, Slider} from "@telegram-apps/telegram-ui";


const newAuctionCreate = () => {
    return (
        <div>
            <div className="main__page__header" id={"main__page__header__auctionList"}>
                <LargeTitle
                    weight="1"
                 >
                    New auction
                </LargeTitle>
                <p className="main__page__header__title__description">Step 2</p>
            </div>

            <div className="body__auctionList">
                <Input placeholder="Ticket cost" style={{background:"transparent"}}/>
                <Input placeholder="Tickets count" style={{background:"transparent"}}/>
                <Slider before={<div className="slider__days">40 days</div>} />
                <Button size="l" style={{width:"100%"}}>Create</Button>
            </div>
        </div>
    )
}

export default newAuctionCreate