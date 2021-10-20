import React from "react";
import {
  // HashRouter as Router,
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom"; //BrowserRouter를 사용하면 #이 생기지 않는다.
import Header from "Components/Header";
import Home from "Routes/Home";
import Game from "Routes/Game";
import Store from "Routes/Store";
import Platform from "Routes/Platform";
import Genre from "Routes/Genre";
import Publisher from "Routes/Publisher";
import Footer from "Components/Footer";
import Detail from "Routes/Detail";
// 프롭을 Detail로 보내 페이지를 구성한다.

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" exact component={Game} />
        <Route path="/store" exact component={Store} />
        <Route path="/platform" exact component={Platform} />
        <Route path="/genre" exact component={Genre} />
        <Route path="/publisher" exact component={Publisher} />
        <Route path="/game/:id" component={Detail} />
        <Route path="/platform/:id" component={Detail} />
        <Route path="/genre/:id" component={Detail} />
        <Route path="/store/:id" component={Detail} />
        <Route path="/publisher/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  </Router>
);
