import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import { AppRoot } from "@telegram-apps/telegram-ui";
import Item from "./pages/item";


function App() {
  const [userInfo,setUserInfo] = useState(null)

  useEffect(() => {

  },{})
  return (
    <AppRoot platform="ios">
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/item/:id" element={<Item />}/>
        </Routes>
      </div>
    </AppRoot>
  );
}

export default App;
