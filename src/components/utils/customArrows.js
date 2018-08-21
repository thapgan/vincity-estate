import React, { Component } from "react";
import './customArrows.css'

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='arrow-btn arrow-btn-left'
            onClick={onClick}
        ><i className="fa fa-chevron-left"></i></div>
    );
}

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className='arrow-btn arrow-btn-right'
            onClick={onClick}
        ><i className="fa fa-chevron-right"></i></div>
    );
}

export default {SampleNextArrow, SamplePrevArrow}
