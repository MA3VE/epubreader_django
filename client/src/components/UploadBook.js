import React, { Component } from "react";
import axios from "axios";

export class UploadBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: "",
            loading: false,
        };
    }

    handleOnChange = async (event) => {
        this.setState({ error: "", loading: true });
        // console.log(event.target.files);
        let temp = event.target.files[0].name.split(".");
        if (temp[temp.length - 1] !== "epub") {
            // console.log("error");
            this.setState({ error: "only epub files are accepted" });
            this.setState({ loading: false });

            return;
        }
        var formData = new FormData();

        formData.append(
            "book",
            event.target.files[0],
            event.target.files[0].name
        );
        formData.append("title", event.target.files[0].name);

        try {
            const res = await axios({
                method: "POST",
                url: "/api/book/create",
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Token ${this.props.token}`,
                },
            });
            console.log(res.data);
        } catch (error) {
            console.log(error);
            console.log(error.response.data);
            this.setState({
                error: "we get into some errors plz try again later",
            });
        }
        this.setState({ loading: false });
    };

    render() {
        return (
            <div>
                <div>
                    <input
                        id="inputfile"
                        type="file"
                        hidden={true}
                        onChange={this.handleOnChange}
                        disabled={this.state.loading}
                    ></input>
                    <label htmlFor="inputfile" className="btn btn-primary mt-2">
                        {this.state.loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm " />
                                loading...
                            </>
                        ) : (
                            <span>upload</span>
                        )}
                    </label>
                </div>
                {this.state.error ? (
                    <div className="alert alert-danger">
                        <p>{this.state.error}</p>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default UploadBook;
