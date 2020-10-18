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
        
        /* IN C++ FOR BEN

            int i = 0;
            int y;

            while(!y)
            {
                if (TIMES[i] != SetFromDropdown)
                {
                    i++
                }
                else
                {
                    y = i;
                }
            }

            return TIMES[y];


            EDGE CASES:
            if From == 11:00PM && To == 11:00PM then idek

            if From == To then change 'To' to 'To + 1' in TIMES[]
        */

       let x = TIMES.findIndex((x) => x === fromDropdown);
            
       setSecondDropdownStart(x);
       

    }, [fromDropdown])

    const renderSecondDropdownOptions = () => {
        /* Take the elements from secondDropdownStart onward */
        
        let forwardDates = TIMES.slice(secondDropdownStart)
                        
                            return forwardDates.map((time) => {
                                return (
                                    <option>{time}</option>
                                )
                            })
                        
         
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