import React from "react";
import logo from "../images/logo.svg"

export default function Logo(props) {
    return (
        <div className="logo">
            <img src={logo} alt="logo to-do list"/>
            <p>To-Do@List</p>
        </div>
    )
}

