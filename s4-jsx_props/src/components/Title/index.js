import './title_style.css'
import React from 'react';
import {FaChevronRight} from "react-icons/fa";

function Title({name}) {
    return (
        <div className="title_container container">
            <h2 className="title_name">
                {name}
            </h2>
            <div className="showAll">
                <a href="#" className="showAll">TẤT CẢ</a> 
                <FaChevronRight className='title_icon'/>
            </div>
        </div>
    )
}

export default Title;