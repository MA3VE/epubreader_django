import React, { Component } from "react";

export class Size extends Component {
    render() {
        return (
            <div>
                <input
                    style={{ width: "75px" }}
                    type="number"
                    onChange={(e) => {
                        this.props.changeFontSize(e.target.value);
                    }}
                    value={this.props.fontSize}
                />
            </div>
        );
    }
}

export default Size;
