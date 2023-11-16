import React from 'react';
import './Popup.css';

const ModalAddQuestion = (props) =>{

    return (props.trigger)? (
        <div className = "popup">
            <div className = "popup-inner">
                <p1>You have successfully added a new question !</p1>
                <br/><br/>
                <button clsssName = "close-btn" onClick={()=>props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default ModalAddQuestion;