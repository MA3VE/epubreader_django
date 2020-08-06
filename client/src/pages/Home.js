import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import BookPreview from "../components/BookPreview";
import Reader from "../components/Reader";
import UploadBook from "../components/UploadBook";

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: null,
            books: [],
            toread: "",
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

    getToRead = (bookid) => {
        console.log("clicked");
        this.setState({ toread: this.state.books[bookid].book });
        // this.setState({ toread: });
    };

    render() {
        return (
            <>
                {!this.state.toread ? (
                    <div className="container">
                        <UploadBook token={this.state.token} />
                        {this.state.books.map((book, i) => {
                            return (
                                <div className="row mb-2" key={i}>
                                    <BookPreview
                                        title={book.title}
                                        cover={book.cover}
                                        bookid={i}
                                        getToRead={this.getToRead}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <Reader toread={this.state.toread} />
                )}
            </>
        );
    }
}

export default Home;
