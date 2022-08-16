import React from "react";
import { BsSearch } from "react-icons/bs"
import NewPost from "./newpost"
export default function Navbar() {
    return (
        <navbar className="navbar">
            <div className="head">
                <a>imgur</a>
            </div>
            <NewPost />
            <input className='searchbar'
                type="text"
                placeholder="Search"
                name="search"
            /><BsSearch />
            <button className="signUp-btn" type="submit">
                Sign up
            </button>
            <button className="signIn-btn" type="submit">
                Sign in
            </button>
        </navbar>
    );
}
