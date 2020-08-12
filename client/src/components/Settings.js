import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Size from "./Size";

export class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };
    }

    render() {
        return (
            <div>
                <button
                    className="btn toc-btn"
                    onClick={() => {
                        this.setState({ visible: true });
                        console.log("cliekd");
                    }}
                    style={{ float: "right" }}
                >
                    <i className="material-icons">settings</i>
                </button>

                <Drawer
                    open={this.state.visible}
                    onClose={() => {
                        this.setState({ visible: false });
                    }}
                    anchor="right"
                >
                    <List style={{ width: "200px" }}>
                        <ListItem>size </ListItem>
                        <ListItem>
                            <Size
                                fontSize={this.props.fontSize}
                                changeFontSize={this.props.changeFontSize}
                            />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default Settings;
