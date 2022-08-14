import React, { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);
    return (
        <div className="counter-btn">
            <button onClick={(e) => setCount(count + 1)}>{props.btn} {count}</button>
        </div>
    );
}