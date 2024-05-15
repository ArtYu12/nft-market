import {Button, Card, Cell, Image, LargeTitle} from "@telegram-apps/telegram-ui"
import { CardCell } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell"
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip"
import React from "react"


const NewAuctionList = () => {
    return (
        <div className="main__page">
            <div className="main__page__header" id={"main__page__header__auctionList"}>
                    <LargeTitle
                        weight="1"
                    >
                        New auction
                    </LargeTitle>
                    <p className="main__page__header__title__description">Step 1. Select NFT</p>
            </div>

            <div className="new__auction__nfts__list">
                <Cell
                    before={<Image src={"https://s3-alpha-sig.figma.com/img/cf30/bc8d/b0be4242116c53ba401676ad1c2e39db?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2eOChUVCrVDO2-gNv4LqiC6glsrmHeUIYhbEHSA~1dBLMK7NLHczt6TCKAyAi-k7EL898v61lz~Rsb-2MJWe-NzD~LrVbs2WdMPtvpAkL5GwnmYjRSy9tz4RFyTnpvNOF-ABPq-CgBIibuZNZxGOUtCl0xe~2BnJyLcy5Zm6JbQCgM9cAdwiH7IXsEbMpW9Ti7M5IP4KvJ323EcrBU4nXlzYcXY6QhbZtSYIapzS1wTUyzknx3w8bl6MISmotNi0-eFd7z79Hs9i-Z98U~EZFy0bf6~aC6KTWg375Nx5ptTS~-A~GNoDsucomTPeZ4HtVhJBR6MTNlkRJyCqke19A__"} size={48} />}
                    description="Description"
                >
                    Title
                </Cell>
                <Cell
                    before={<Image src={"https://s3-alpha-sig.figma.com/img/cf30/bc8d/b0be4242116c53ba401676ad1c2e39db?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2eOChUVCrVDO2-gNv4LqiC6glsrmHeUIYhbEHSA~1dBLMK7NLHczt6TCKAyAi-k7EL898v61lz~Rsb-2MJWe-NzD~LrVbs2WdMPtvpAkL5GwnmYjRSy9tz4RFyTnpvNOF-ABPq-CgBIibuZNZxGOUtCl0xe~2BnJyLcy5Zm6JbQCgM9cAdwiH7IXsEbMpW9Ti7M5IP4KvJ323EcrBU4nXlzYcXY6QhbZtSYIapzS1wTUyzknx3w8bl6MISmotNi0-eFd7z79Hs9i-Z98U~EZFy0bf6~aC6KTWg375Nx5ptTS~-A~GNoDsucomTPeZ4HtVhJBR6MTNlkRJyCqke19A__"} size={48} />}
                    description="Description"
                >
                    Title
                </Cell>
                <Cell
                    before={<Image src={"https://s3-alpha-sig.figma.com/img/cf30/bc8d/b0be4242116c53ba401676ad1c2e39db?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2eOChUVCrVDO2-gNv4LqiC6glsrmHeUIYhbEHSA~1dBLMK7NLHczt6TCKAyAi-k7EL898v61lz~Rsb-2MJWe-NzD~LrVbs2WdMPtvpAkL5GwnmYjRSy9tz4RFyTnpvNOF-ABPq-CgBIibuZNZxGOUtCl0xe~2BnJyLcy5Zm6JbQCgM9cAdwiH7IXsEbMpW9Ti7M5IP4KvJ323EcrBU4nXlzYcXY6QhbZtSYIapzS1wTUyzknx3w8bl6MISmotNi0-eFd7z79Hs9i-Z98U~EZFy0bf6~aC6KTWg375Nx5ptTS~-A~GNoDsucomTPeZ4HtVhJBR6MTNlkRJyCqke19A__"} size={48} />}
                    description="Description"
                >
                    Title
                </Cell>
                <Cell
                    before={<Image src={"https://s3-alpha-sig.figma.com/img/cf30/bc8d/b0be4242116c53ba401676ad1c2e39db?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2eOChUVCrVDO2-gNv4LqiC6glsrmHeUIYhbEHSA~1dBLMK7NLHczt6TCKAyAi-k7EL898v61lz~Rsb-2MJWe-NzD~LrVbs2WdMPtvpAkL5GwnmYjRSy9tz4RFyTnpvNOF-ABPq-CgBIibuZNZxGOUtCl0xe~2BnJyLcy5Zm6JbQCgM9cAdwiH7IXsEbMpW9Ti7M5IP4KvJ323EcrBU4nXlzYcXY6QhbZtSYIapzS1wTUyzknx3w8bl6MISmotNi0-eFd7z79Hs9i-Z98U~EZFy0bf6~aC6KTWg375Nx5ptTS~-A~GNoDsucomTPeZ4HtVhJBR6MTNlkRJyCqke19A__"} size={48} />}
                    description="Description"
                >
                    Title
                </Cell>
            </div>
        </div>
    )
}

export default NewAuctionList