import React from 'react';
import PropType from "prop-types";

export const Card = (props) => {
    return (
        <div className="card mb-5" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.linkImage} alt="Card image cap"/>
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">{props.btnContent}</a>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropType.string,
    linkImage: PropType.string,
    text: PropType.string,
    btnContent: PropType.string
}