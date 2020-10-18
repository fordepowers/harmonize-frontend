import React, { useState } from 'react';
import './CreatePoll.css'
import TimeRange from './TimeRange/TimeRange';

const TIMES = [
    "12:00am",
    "1:00am",
    "2:00am",
    "3:00am",
    "4:00am",
    "5:00am",
    "6:00am",
    "7:00am",
    "8:00am",
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",
    "7:00pm",
    "8:00pm",
    "9:00pm",
    "10:00pm",
    "11:00pm",
  
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
                            <TimeRange />
                        </>
                    ) : null
                }
                <button className="create-btn">Create</button>
            </main>
        </div>
    )
}