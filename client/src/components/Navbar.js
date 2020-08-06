import React, { Component } from "react";
import Settings from "./Settings";
import Toc from "./Toc";

export class Navbar extends Component {
    render() {
        // console.log(this.props.tocs);
        return (
            <div
                style={{ height: 30, width: this.props.width }}
                className="row"
            >
                <div className="col">
                    <Toc
                        tocs={this.props.tocs}
                        rendition={this.props.rendition}
                    />
                </div>
                <div className="col">
                    <Settings />
                </div>
            </div>
        );
    }
}

export default Navbar;
