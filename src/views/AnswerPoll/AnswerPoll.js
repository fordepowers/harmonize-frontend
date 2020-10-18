import React from 'react';
import './AnswerPoll.css'

const props = {
    startTime:  new Date(new Date().setTime(new Date().getTime() + (10 * 60 * 60 * 1000))),
    endTime: new Date(new Date().setTime(new Date().getTime() + (14 * 60 * 60 * 1000)))
}

console.log(props);
export default () => {
    
    return (
        <div className="AnswerPoll">
        
            <main className="container">
                <h1>AnswerPoll</h1>
                <p>Start: {props.startTime.getHours()} AM</p>
                <p>End:{props.endTime.getHours()} PM</p>
            </main>
        </div>
    )
}