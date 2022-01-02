import React from "react";

function Btn({ className, icon, text, ...props }) {
    return (
        <div
            className={`btn${className === "" ? "" : " " + className}`}
            {...props}
        >
            {text}
            {icon && icon}
        </div>
    );
}

Btn.defaultProps = {
    className: "",
    icon: false,
};

export default Btn;
