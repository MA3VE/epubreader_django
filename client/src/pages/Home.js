import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import BookPreview from "../components/BookPreview";
// import Reader from "../components/Reader";
import UploadBook from "../components/UploadBook";

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: null,
            books: [],
        };
    }

    componentDidMount = async () => {
        const token = Cookies.get("token");
        if (!token) window.location.href = "http://127.0.0.1:3000/login";
        this.setState({ token });

        try {
            const res = await axios({
                url: "http://127.0.0.1:8000/api/book",
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            this.setState({ books: res.data });
        } catch (e) {
            console.log(e.response.data);
        }
    };

    render() {
        return (
            <div className="container">
                {/* <button
                    className="btn-primary btn-sm "
                    style={{ marginTop: "10px" }}
                >
                    upload a new book
                </button> */}
                <UploadBook token={this.state.token} />
                <div className="row">
                    {this.state.books.map((book, i) => {
                        return (
                            <div
                                className="col-md-4"
                                key={i}
                                style={{ marginTop: "10px" }}
                            >
                                <BookPreview
                                    title={book.title}
                                    cover={book.cover}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Home;
