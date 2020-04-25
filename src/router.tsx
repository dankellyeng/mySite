import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { About } from './pages/About'; 
import { Home } from './pages/Home'; 
import { Portfolio } from './pages/Portfolio';
import { Inspiration } from './pages/Inspiration';
import { Demos } from './pages/Demos';
import  PageNotFound from './pages/PageNotFound';

class Router extends Component {
  	constructor(props: any) {
		super(props);
  	}

  	render() {
    	return (
      		<Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
			  <Route path="/inspiration" component={Inspiration} />
              <Route path="/demos" component={Demos} />
              <Route component={PageNotFound} />
      		</Switch>
    	);
  	}
}

export default Router;