import React, { Component } from "react";

export class Settings extends Component {
    render() {
        return (
            <div>
                <button className="btn Settings-btn" style={{ float: "right" }}>
                    <i className="material-icons">settings</i>
                </button>
            </div>
        );
    }
}

export default Settings;
