import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./header";
import withWrappedComponent from "./picShow";

const PlanComponent = withWrappedComponent("plan");
const MediaComponent = withWrappedComponent("media");
const VideoComponent = withWrappedComponent("video");

export default class App extends React.Component {
  render() {
    const { locale, changeLocal } = this.props;
    return (
      <Router>
        <React.Fragment>
          <Header
            changeLocal={changeLocal}
            locale={locale}
          />

          <Switch>
            <Redirect from="/" exact to="/plan" />
            <Route path="/plan" exact component={PlanComponent} />
            <Route path="/media" component={MediaComponent} />
            <Route path="/video" component={VideoComponent} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}
