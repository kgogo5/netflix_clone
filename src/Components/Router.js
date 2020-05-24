import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom"; //BrowserRouter를 사용하면 #이 생기지 않는다.
import Header from "Components/Header";
import Home from "Routes/Home";
import Game from "Routes/Game";
import Platform from "Routes/Platform";
import Genre from "Routes/Genre";
import Tag from "Routes/Tag";
import Store from "Routes/Store";
import Publisher from "Routes/Publisher";
import Footer from "Components/Footer";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" exact component={Game} />
        <Route path="/platform" exact component={Platform} />
        <Route path="/genre" exact component={Genre} />
        <Route path="/tag" exact component={Tag} />
        <Route path="/store" exact component={Store} />
        <Route path="/publisher" exact component={Publisher} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  </Router>
);
