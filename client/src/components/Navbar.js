import React, { Component } from "react";
import Settings from "./Settings";
import Toc from "./Toc";

export class Navbar extends Component {
    render() {
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
                    <Settings
                        rendition={this.props.rendition}
                        token={this.props.token}
                        theme={this.props.theme}
                        fontSize={this.props.fontSize}
                        changeFontSize={this.props.changeFontSize}
                        changeTheme={this.props.changeTheme}
                    />
                </div>
            </div>
        );
    }
}

export default Navbar;
