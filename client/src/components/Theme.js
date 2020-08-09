import React, { Component } from "react";

export class Theme extends Component {
    handleClick = (e) => {
        const { value } = e.currentTarget;

        this.props.changeTheme(value);
    };
    render() {
        return (
            <div>
                <button
                    className="btn btn-block"
                    style={{
                        background: "black",
                        color: "#A1A1A1",
                        margin: "10px",
                    }}
                    value="night"
                    onClick={this.handleClick}
                >
                    Night
                </button>
                <button
                    className="btn btn-block"
                    style={{
                        background: "black",
                        color: "white",
                        margin: "10px",
                    }}
                    value="night-contrast"
                    onClick={this.handleClick}
                >
                    Night Contrast
                </button>
                <button
                    className="btn btn-block"
                    style={{
                        background: "#F5DEB3",
                        color: "#644D32",
                        margin: "10px",
                    }}
                    value="sepia"
                    onClick={this.handleClick}
                >
                    Sepia
                </button>
                <button
                    className="btn btn-block"
                    style={{
                        background: "#F5DEB3",
                        color: "black",
                        margin: "10px",
                    }}
                    value="sepia-contrast"
                    onClick={this.handleClick}
                >
                    Sepia Contrast
                </button>
                <button
                    className="btn btn-block"
                    style={{
                        background: "black",
                        color: "#008000",
                        margin: "10px",
                    }}
                    value="console"
                    onClick={this.handleClick}
                >
                    Console
                </button>
                <button
                    className="btn btn-block"
                    style={{
                        background: "white",
                        color: "#black",
                        margin: "10px",
                    }}
                    value="day"
                    onClick={this.handleClick}
                >
                    Day
                </button>
            </div>
        );
    }
}

export default Theme;
