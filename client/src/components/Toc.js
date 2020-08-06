import React, { Component } from "react";
import "./toc.css";

export class Toc extends Component {
    render() {
        return (
            <div>
                <button className="btn toc-btn">
                    <i className="fa fa-bars"></i>
                </button>
            </div>
        );
    }
}

export default Toc;
