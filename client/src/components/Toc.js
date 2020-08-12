import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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
