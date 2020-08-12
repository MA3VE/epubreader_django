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
            fontSize: null,
            theme: null,
            bookid: null,
            page: null,
        };
    }

    componentDidMount = async () => {
        const token = Cookies.get("token");
        if (!token) window.location.href = "login";
        this.setState({ token });

        try {
            const res = await axios({
                url: "/api/book",
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            this.setState({ books: res.data });
            console.log(res.data);
        } catch (error) {
            if (error.response.data) {
                if (error.response.data.detail === "Invalid token.") {
                    Cookies.remove("token");
                    window.location.href = "/";
                }
            }
            console.log("error");
        }
    };

    getToRead = (bookid) => {
        console.log("clicked");
        this.setState({ toread: this.state.books[bookid].book });
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
                                        bookid={book.id}
                                        getToRead={this.getToRead}
                                        id={i}
                                        getSettings={(
                                            fontSize,
                                            bookid,
                                            id,
                                            page
                                        ) => {
                                            this.setState({
                                                fontSize,
                                                bookid,
                                                id,
                                                page,
                                            });
                                        }}
                                        fontSize={book.text_size}
                                        theme={book.theme}
                                        page={book.page}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <Reader
                        toread={this.state.toread}
                        token={this.state.token}
                        fontSize={this.state.fontSize}
                        bookid={this.state.bookid}
                        page={this.state.page}
                    />
                )}
            </>
        );
    }
}

export default Home;
