import React from "react";
import PropType from "prop-types";

export const Jumbotron = (props) => {
    return (
        <div className="p-5 rounded-lg" id="jumbotron">
            <h1 className="display-4">{props.title}</h1>
            <p>{props.text}</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">{props.btnContent}</a>
        </div>
    )
}

Jumbotron.propTypes = {
    title: PropType.string,
    text: PropType.string,
    btnContent: PropType.string
}