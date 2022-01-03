import React from "react";

export default function Square({ onClick, value }) {
    return ( <button className = "square"
        onClick = { onClick } > { value }
    </button>
    );
}