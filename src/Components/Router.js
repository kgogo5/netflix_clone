import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom"; //BrowserRouter를 사용하면 #이 생기지 않는다.
import Header from "Components/Header";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Footer from "Components/Footer";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  </Router>
);
