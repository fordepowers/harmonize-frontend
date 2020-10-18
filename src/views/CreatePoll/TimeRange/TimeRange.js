import React from 'react';

export default () => {
    return (
        <>
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
        </>
    );
}