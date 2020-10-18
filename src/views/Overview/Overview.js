import React from 'react';
import './Overview.css'
import { Bar } from 'react-chartjs-2'

export default () => {

    return (
        <div className="Overview">
            <main className="container">
                <h1 className="page-heading">Overview</h1>
                <p className="event-title">Among Us Scheduling</p>
                <p className="event-date">{new Date().toDateString()}</p>

                <div>
                    <Bar data={{ 
                        labels: ['1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'] ,
                        datasets: [{ 
                            label: 'Number of people available',
                            barPercentage: 0.5,
                            barThickness: 25,
                            maxBarThickness: 60,
                            minBarLength: 2,
                            data: [10, 20, 30, 40, 50, 60, 70],
                            backgroundColor: 'rgba(82, 34, 208, 0.6)'
                        }],
                        options: {
        
                            responsive: true,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                        // OR //
                                        beginAtZero: true  
                                    }
                                }]
                            }
                        }
                    }}/>
                </div>
            </main>
        </div>
    );
}