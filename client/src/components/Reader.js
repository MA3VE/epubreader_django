import React, { Component } from "react";
import { ReactReader } from "react-reader";
import Navbar from "./Navbar";
import axios from "axios";

export class Reader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0,
            toc: null,
            rendition: null,
            fontSize: this.props.fontSize,
            theme: this.props.theme,
            bookid: this.props.bookid,
            id: this.props.id,
            page: this.props.page,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount = async () => {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    changeFontSize = async (fontSize) => {
        this.state.rendition.themes.fontSize(fontSize + "px");
        this.setState({ fontSize });
        await axios.patch(
            "http://127.0.0.1:8000/api/book/patch",
            { text_size: fontSize, id: this.state.bookid },
            {
                headers: {
                    Authorization: `Token ${this.props.token}`,
                },
            }
        );
        return;
    };

    locationChanged = async (page) => {
        await axios.patch(
            "http://127.0.0.1:8000/api/book/patch",
            { page, id: this.state.bookid },
            {
                headers: {
                    Authorization: `Token ${this.props.token}`,
                },
            }
        );
    };

    render() {
        return (
            <div
                style={{
                    maxWidth: this.state.width,
                }}
            >
                <Navbar
                    width={this.state.width}
                    tocs={this.state.toc}
                    rendition={this.state.rendition}
                    token={this.props.token}
                    fontSize={this.state.fontSize}
                    changeFontSize={this.changeFontSize}
                />
                <div
                    style={{
                        position: "relative",
                        height: this.state.height - 30,
                    }}
                >
                    <ReactReader
                        url={this.props.toread}
                        location={this.props.page}
                        locationChanged={this.locationChanged}
                        showToc={false}
                        tocChanged={(toc) => {
                            this.setState({ toc });
                        }}
                        getRendition={(rendition) => {
                            this.setState({ rendition }, () => {
                                this.state.rendition.themes.fontSize(
                                    this.state.fontSize + "px"
                                );
                            });
                        }}
                        style={{
                            position: "relative",
                            height: this.state.height,
                            width: this.state.width,
                        }}
                        getSettings={(fontSize, theme, bookid, id) => {
                            this.setState({ fontSize, theme, bookid, id });
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Reader;
