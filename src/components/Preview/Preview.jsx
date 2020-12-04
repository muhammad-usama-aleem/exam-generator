import React from 'react';
import './Preview.css';

export default function Preview() {
    return (
        <>
            <div className="preview">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2W1XKn1zNuJkSZVIZPYnu1Mw089LKVlU51Q&usqp=CAU' alt='preview' />
                <p className="preview-text">Preview</p>
                <br/><br/>
            </div>
            
            <br/><br/>
            <br/><br/>
            <div className="finalize">
                <button type="button" className="finalize-text">Finalize</button>
            </div>
        </>
    )
}
