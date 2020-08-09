import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";

export class Toc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };
    }

    render() {
        const tocs = this.props;
        return (
            <div>
                <button
                    className="btn toc-btn"
                    onClick={() => {
                        this.setState({ visible: true });
                        console.log("cliekd");
                    }}
                >
                    <i className="material-icons">dehaze</i>
                </button>

                <Drawer
                    open={this.state.visible}
                    onClose={() => {
                        this.setState({ visible: false });
                    }}
                >
                    <List style={{ width: "200px" }}>
                        {tocs.tocs
                            ? tocs.tocs.map((toc, id) => {
                                  return (
                                      <ListItem
                                          button
                                          key={id}
                                          value={toc.href}
                                          onClick={(e) => {
                                              this.props.rendition.display(
                                                  toc.href
                                              );
                                          }}
                                      >
                                          {toc.label}
                                      </ListItem>
                                  );
                              })
                            : null}
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default Toc;
