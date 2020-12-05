import React from 'react';
import './Mcqs.css';

function Mcqs(props) {
    return (
        <>
            <div className="Mcqs">
                {props.list}
                {/* {console.log(props.list.type)} */}
            </div>
        </>
    )
}

export default Mcqs;
