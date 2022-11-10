import React from "react";
import Header from "./components/common/header/Header";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepages from "./components/home/Homepages";
import Footer from "./components/common/footer/Footer";
import Culture from "./components/culture/Culture";
import SinglePages from "./components/singlePages/SinglePages";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route exact path="/singlepage/:id" component={SinglePages} />
          <Route exact path="/culture" component={Culture} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
