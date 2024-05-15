import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import { AppRoot } from "@telegram-apps/telegram-ui";
import Item from "./pages/item";
import Newauctionlist from "./pages/newauctionlist";
import NewAuctionCreate from "./pages/newAuctionCreate";
import NewAuctionConfirm from "./pages/newAuctionConfirm";


function App() {
  const [userInfo,setUserInfo] = useState(null)

  useEffect(() => {

  },{})
  return (
    <AppRoot>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/item/:id" element={<Item />}/>
          <Route path="/select-nft" element={<Newauctionlist />}/>
          <Route path="/create-auction" element={<NewAuctionCreate />}/>
          <Route path="/confirm-auction" element={<NewAuctionConfirm />}/>
        </Routes>
      </div>
    </AppRoot>
  );
}

export default App;
