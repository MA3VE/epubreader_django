import React, { Component } from "react";
import LR from "./pages/LR";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container } from "@material-ui/core";
import "./bootstrap.min.css";
import "./App.css";

export class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/login" component={LR} exact></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
