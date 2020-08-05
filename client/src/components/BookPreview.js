import React, { Component } from "react";

export class BookPreview extends Component {
    render() {
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <img
                        src={this.props.cover}
                        className="card-img-top"
                        alt="..."
                    ></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <div
                            className="btn btn-primary btn-sm"
                            onClick={this.props.handleBookClick}
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
