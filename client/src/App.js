import React, { Component } from "react";
import Home from "./pages/Home";
import LR from "./pages/LR";
import Reader from "./pages/Reader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Container } from "@material-ui/core";
import "./bootstrap.min.css";
import "./App.css";
export class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/Reader" component={Reader} exact></Route>
                    <Route path="/login" component={LR} exact></Route>
                    <Route path="/" component={Home} exact></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
