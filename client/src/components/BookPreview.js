import React, { Component } from "react";

export class BookPreview extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    // handleBookClick =

    render() {
        return (
            <>
                <div className="card" style={{ width: "100%" }}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <div
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                                this.props.getToRead(this.props.id);
                                this.props.getSettings(
                                    this.props.fontSize,
                                    this.props.bookid,
                                    this.props.id,
                                    this.props.page
                                );
                            }}
                        >
                            Read
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BookPreview;
