import { Button, Card, Text } from "@telegram-apps/telegram-ui"
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell"
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip"
import React from "react"
import { useNavigate } from "react-router-dom"


const Main = () => {
    const nav = useNavigate()
    return (
        <div className="main__page">
            <div className="main__page__header">
                <Text className="main__page__header__title">Home</Text>
                <Button size="s">Connect wallet</Button>
            </div>
            <div className="nfts__list">
                <div className="nfts__list__header">
                    <div className="nfts__list__header__header">Ending soon</div>
                    <div className="nfts__list__header__seeall">See all</div>
                </div>
                <div className="nfts__list__body">
                <Card style={{minWidth:"212px"}} onClick={() => nav("/item/1")}>
                    <React.Fragment key=".0">
                        <CardChip readOnly>
                        21/50
                        </CardChip>
                        <img
                        alt="Dog"
                        src="https://i.imgur.com/892vhef.jpeg"
                        style={{
                            display: 'block',
                            height: 191,
                            objectFit: 'cover',
                            width: "100%"
                        }}
                        />
                        <CardCell
                        readOnly
                        subtitle="United states"
                        >
                        New York
                        </CardCell>
                    </React.Fragment>
                </Card>
                <Card style={{minWidth:"212px"}}>
                    <React.Fragment key=".0">
                        <CardChip readOnly>
                        Hot place
                        </CardChip>
                        <img
                        alt="Dog"
                        src="https://i.imgur.com/892vhef.jpeg"
                        style={{
                            display: 'block',
                            height: 191,
                            objectFit: 'cover',
                            width: "100%"
                        }}
                        />
                        <CardCell
                        readOnly
                        subtitle="United states"
                        >
                        New York
                        </CardCell>
                    </React.Fragment>
                </Card>
                <Card style={{minWidth:"212px"}}>
                    <React.Fragment key=".0">
                        <CardChip readOnly>
                        Hot place
                        </CardChip>
                        <img
                        alt="Dog"
                        src="https://i.imgur.com/892vhef.jpeg"
                        style={{
                            display: 'block',
                            height: 191,
                            objectFit: 'cover',
                            width: "100%"
                        }}
                        />
                        <CardCell
                        readOnly
                        subtitle="United states"
                        >
                        New York
                        </CardCell>
                    </React.Fragment>
                </Card>
                </div>
            </div>
            <div className="main__page__buttons">
                <Button size="l" before={<img src="/folder_24.svg"/>} style={{width:"100%"}} onClick={() => nav("/select-nft")}>My auctions</Button>
                <Button size="l" before={<img src="/group_24.svg"/>} style={{width:"100%"}} onClick={() => nav("/create-auction")}>Refferals</Button>
                <Button size="l" before={<img src="/bot_menu_24.svg"/>} style={{width:"100%"}} onClick={() => nav("/confirm-auction")}>Tasks</Button>
                <Button size="l" before={<img src="/globe_24.svg"/>} mode="white" style={{width:"100%",color:"black"}}>About platform</Button>
            </div>
            
        </div>
    )
}

export default Main