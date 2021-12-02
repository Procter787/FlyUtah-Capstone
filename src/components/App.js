import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import BearRiverPage from "./Rivers/Bear-River/BearRiverPage"
import GreenRiverPage from "./Rivers/Green-River/GreenRiverPage";
import LoganRiverPage from "./Rivers/Logan-River/LoganRiverPage";
import ProvoRiverPage from "./Rivers/Provo-River/ProvoRiverPage";
import WeberRiverPage from "./Rivers/Weber-River/WeberRiverPage";



// import RiversPage from "./courses/RiversPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Bear-River" component={BearRiverPage} />
        <Route path="/Green-River" component={GreenRiverPage} />
        <Route path="/Logan-River" component={LoganRiverPage} />
        <Route path="/Provo-River" component={ProvoRiverPage} />
        <Route path="/Weber-River" component={WeberRiverPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
