import { Banner, Button, Text } from "@telegram-apps/telegram-ui"
import Back from "../helpers/back"

const Item = ()=> {
    return (
        <div className="item__page">
            
            <img src="https://i.imgur.com/892vhef.jpeg" className="item__page__image"/>
            <Text className="item__page__title">NFT Name</Text>
            <div className="item__page__info">
                <Banner
                    header="1 TON"
                    subheader="Ticket cost"
                    type="section"
                    style={{background:"transparent"}}
                >
                </Banner>
                <Banner
                    header="24/50"
                    subheader="Tickets remaining"
                    type="section"
                    style={{background:"transparent"}}
                >
                </Banner>
                <Button size="l" style={{width:"100%"}}>Buy ticket</Button>
            </div>
        </div>
    )
}

export default Item