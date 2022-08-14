import React from "react";
import Counter from "./counter";

export default function ImageCard() {

    return (
        <div className="image-card">
            <img></img>
            <h2>{props.title}</h2>
            <div>Apple is good for health</div>
            <Counter btn="like" />
            <Counter btn="comment" />
            <Counter btn="views" />
        </div>
    )
}