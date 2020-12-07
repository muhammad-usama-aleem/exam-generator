import React from 'react';
import { Link } from "react-router-dom";
import './Preview.css';




 function Preview() {
    return (
        <>
            <div className="finalize-link">
                <Link  to="./finalize" className="preview">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2W1XKn1zNuJkSZVIZPYnu1Mw089LKVlU51Q&usqp=CAU' alt='preview' />
                    <p className="preview-text">Preview</p>
                    <br/><br/>
                </Link> 
            </div>
            
            <br/><br/>
            <br/><br/>
            <Link to="./finalize" className="finalize">
                <button type="button" className="finalize-text">Finalize</button>
            </Link>
            
        </>
    )
}
export default Preview;