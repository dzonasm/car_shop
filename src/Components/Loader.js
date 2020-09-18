import React from "react";

export default function Loader() {
    const loaderStyle = {
        border: "16px solid #f3f3f3",
        borderTop: "16px solid #3498db",
        borderRadius: "50%",
        width: "120px",
        height: "120px",
        animation: "spin 2s linear infinite",
    };

    return (
        <div className="flex justify-center">
            <div style={loaderStyle}></div>
        </div>
    );
}
