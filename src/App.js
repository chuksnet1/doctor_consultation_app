import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Pages/Home/Home";
import ChatBot from "./component/ChatBot/ChatBot";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/chat" element ={<ChatBot/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
