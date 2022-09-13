import React from "react";
import { Link } from "react-router-dom";

{/*
 // @ts-ignore */}
 const MailTo = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default MailTo;
