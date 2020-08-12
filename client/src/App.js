import React, { Component } from "react";
import LR from "./pages/LR";
import Home from "./pages/Home";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./bootstrap.min.css";
import "./App.css";
import NOTFOUND from "./pages/NOTFOUND";

export class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/login" component={LR} exact></Route>
                    <Route
                        path="/forgetpassword"
                        component={ForgetPassword}
                        exact
                    ></Route>
                    <Route
                        path="/resetpassword"
                        component={ResetPassword}
                        exact
                    ></Route>
                    <Route path="/" component={NOTFOUND}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
