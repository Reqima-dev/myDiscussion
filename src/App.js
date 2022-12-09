import React from "react";
import Header from "./components/common/header/Header";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

/*import { BrowserRouter as Router, Switch, Route } from "react-router-dom";*/
import Homepages from "./components/home/Homepages";
import Footer from "./components/common/footer/Footer";
import Culture from "./components/culture/Culture";
import SinglePages from "./components/singlePages/SinglePages";

const App = () => {
  return (
    <BrowserRouter basename="/myDiscussion">
      <Header />
      <Routes>
        <Route  path="/" element={<Homepages/>} />
        <Route path="/singlepage/:id" exact element={<SinglePages/>} />
        <Route  path="/culture" element={<Culture/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
