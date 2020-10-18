import React from 'react';
import './CreatePoll.css'

export default () => {
    return (
        <div className="CreatePoll">
            <main className="container">
                <h1 className="page-heading">Create Poll</h1>

                <label htmlFor="title" className="input-label">Title:</label>
                <input id="title" placeholder="Enter title" className="input title"></input>

                <label htmlFor="date" className="input-label">Date:</label>
                <div className="date-input-container">
                    <input id="date" type="date" className="input"></input>
                    <div className="checkbox-container">
                        <label className="all-day-label">All Day?</label>
                        <input id="allDay" type="checkbox"></input>
                    </div>
                </div>
                
                <button className="create-btn">Create</button>
            </main>
        </div>
    )
}