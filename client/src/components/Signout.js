import React, { Component } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export class Signout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: "",
        };
    }

    handleClick = async (e) => {
        e.preventDefault();
        const token = Cookies.get("token");
        if (!token) window.location.href = "login";
        this.setState({ token });

        try {
            Cookies.remove("token");
            await axios({
                url: "/api/auth/logout/",
                method: "POST",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            window.location.href = "login";
        } catch (error) {}
    };

    render() {
        return (
            <div>
                <button
                    className="btn  btn-danger mt-2"
                    style={{ float: "right" }}
                    onClick={this.handleClick}
                >
                    Signout
                </button>
            </div>
        );
    }
}

export default Signout;
