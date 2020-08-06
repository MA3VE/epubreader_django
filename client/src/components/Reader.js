import React, { Component } from "react";
import { ReactReader } from "react-reader";
import Toc from "./Toc";
import Navbar from "./Navbar";

export class Reader extends Component {
    constructor(props) {
        super(props);

        this.state = { width: 0, height: 0, toc: null, redentiton: null };
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
    render() {
        return (
            <div
                style={{
                    maxWidth: this.state.width,
                }}
            >
                <Navbar width={this.state.width} />
                <div
                    style={{
                        position: "relative",
                        height: this.state.height - 25,
                    }}
                >
                    <ReactReader
                        url={this.props.toread}
                        location={"epubcfi(/6/2[cover]!/6)"}
                        locationChanged={(epubcifi) => console.log(epubcifi)}
                        showToc={false}
                        tocChanged={(toc) => {
                            this.setState({ toc });
                        }}
                        getRendition={(redentiton) => {
                            this.setState({ redentiton });
                        }}
                        style={{
                            position: "relative",
                            height: this.state.height,
                            width: this.state.width,
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Reader;
