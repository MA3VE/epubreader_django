import React, { Component } from "react";
import Settings from "./Settings";
import Toc from "./Toc";

export class Navbar extends Component {
    render() {
        return (
            <div
                style={{ height: 25, width: this.props.width }}
                className="row"
            >
                <div className="col">
                    <Toc />
                </div>
                <div className="col">
                    <Settings />
                </div>
            </div>
        );
    }
}

export default Navbar;
