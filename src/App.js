import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";


function App() {
  const [userInfo,setUserInfo] = useState(null)

  useEffect(() => {

  },{})
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
