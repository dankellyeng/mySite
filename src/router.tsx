import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { Inspiration } from "./pages/Inspiration";
import { Demos } from "./pages/Demos";
import PageNotFound from "./pages/PageNotFound";
import { ProjectPage } from "./pages/ProjectPage";
import { Education } from "./pages/Education";
import { Routine } from "./pages/Routine";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/inspiration" component={Inspiration} />
        <Route path="/demos" component={Demos} />
        <Route path="/project" component={ProjectPage} />
        {/* <Route path="/routine" component={Routine} /> */}
        <Route path="/education" component={Education} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default Router;
