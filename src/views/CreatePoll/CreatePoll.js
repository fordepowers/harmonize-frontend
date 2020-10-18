import React, { useState } from 'react';
import './CreatePoll.css'

const TIMES = [
    
]

export default () => {
    const [isAllDay, setAllDay] = useState(false);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    return (
        <div className="CreatePoll">
            <main className="container">
                <h1 className="page-heading">Create Poll</h1>

                <label htmlFor="title" className="input-label">Title:</label>
                <input id="title" onChange={e => setTitle(e.target.value)} value={title} placeholder="Enter title" className="input title"></input>

                <label htmlFor="date" className="input-label">Date:</label>
                <div className="date-input-container">
                    <input value={date} onChange={e => setDate(e.target.value)} id="date" type="date" className="input"></input>
                    <div className="checkbox-container">
                        <label className="all-day-label">All Day?</label>
                        <input onChange={(e) => setAllDay(e.target.checked)} checked={isAllDay} id="allDay" type="checkbox"></input>
                    </div>
                </div>
                
                {
                    !isAllDay ? (
                        <>

                            <label className="input-label">Time Range:</label>
                            <div className="time-range-input-container">
                                <div className="time-range-input-wrapper">
                                    <label className="range-label">From:</label>
                                    <select className="">
                                        <option>12:00AM</option>
                                    </select>
                                </div>

                                <div className="time-range-input-wrapper">
                                    <label className="range-label">To:</label>
                                    <select className="">
                                        <option>12:00AM</option>
                                    </select>
                                </div>
                              
                            </div>
                        </>
                    ) : null
                }
                <button className="create-btn">Create</button>
            </main>
        </div>
    )
}