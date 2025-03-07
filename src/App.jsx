import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import MailList from "./components/mailList/MailList";
import Footer from "./components/footer/Footer";
import CenterComponent from "./components/centerComponent/CenterComponent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/">
          <Route index={true} element={<Home />} />
          <Route path="hotels">
            <Route index={true} element={<List />} />
            <Route path=":id" element={<Hotel />} />
          </Route>
        </Route>
      </Routes>
      <CenterComponent>
        <MailList />
        <Footer />
      </CenterComponent>
    </BrowserRouter>
  );
}

export default App;
