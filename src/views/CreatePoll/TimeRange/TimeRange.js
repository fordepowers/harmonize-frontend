import React, { useState, useEffect } from 'react';
import '../CreatePoll.css';

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
    const [fromDropdown, setFromDropdown] = useState("");
    const [toDropdown, setToDropdown] = useState("");

    const [secondDropdownStart, setSecondDropdownStart] = useState(1);

    useEffect(() => {
        /* Whenever the from dropdown changes, change secondDropDownStart */

    }, [fromDropdown])

    const renderSecondDropdownOptions = () => {
        /* Take the elements from secondDropdownStart onward */
        
        /**
         *  {
                            TIMES.map((time) => {
                                return (
                                    <option>{time}</option>
                                )
                            })
                        }
         */
    }

    return (
        <>
            <label className="input-label">Time Range:</label>
            <div className="time-range-input-container">
                <div className="time-range-input-wrapper">
                    <label className="range-label">From:</label>
                    <select value={fromDropdown} onChange={(e) => setFromDropdown(e.target.value)} className="">
                        {
                            TIMES.map((time) => {
                                return (
                                    <option>{time}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className="time-range-input-wrapper">
                    <label className="range-label">To:</label>
                    <select value={toDropdown} onChange={e => setToDropdown(e.target.value)} className="">
                        {renderSecondDropdownOptions()}
                    </select>
                </div>
                
            </div>
        </>
    );
}