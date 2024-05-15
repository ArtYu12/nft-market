import {Info, LargeTitle, Placeholder, Title} from "@telegram-apps/telegram-ui";



const newAuctionConfirm = () => {
    return (
        <div>
            <div className="main__page__header" id={"main__page__header__auctionList"}>
            <LargeTitle
                weight="1"
            >
                New auction
            </LargeTitle>
                <p className="main__page__header__title__description">Step 3</p>
            </div>

            <Placeholder
                    header="Confirm transaction in your wallet"
                >
                    <img
                        alt="Telegram sticker"
                        className="blt0jZBzpxuR4oDhJc8s"
                        src="https://s3-alpha-sig.figma.com/img/fe3e/994b/2283cd327db15b0024e2e5e611563bfe?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MNu470~uJ9SMngWBZFyQmehuBTm7N07WiN102Q2sJSXlwo-imC~QgLIwEl67TvGSsVoP25lYNeOMBoXbmPASQxtAh8hSaIy4pIJsagzVF06lYHa~mNTrwpahRnSW0wqva76jk3Tkw0VTFn~1d6a1nqCVhxY6NttxzQRrpeWJVjK6iDlNjP18~RKrCXvIEYLHI4ZS1Hg7pMRRZWpxn3-Gnbmcy9rMVkkuZZbOHFd2NM-M9Y8W75SZpJQ-I4T-pGdFQnQKABP0KGdADy2xZ1idh3edOoyhYd-4YB3fbX-2iUD6elA-5eeKjkR05DwO3-AKY3sA90CbYpX4MMF9UGqJ0g__"
                        style={{width: "50%"}}
                    />
                </Placeholder>
        </div>
    );
}

export default newAuctionConfirm;