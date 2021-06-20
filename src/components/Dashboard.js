import React from 'react'
import './Dashboard.css'
import LineGraph from './LineGraph'

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard__container">
                <div className="dashboard__chartSection">
                    <div className="dashboard__portfolio">
                        <h1>$114656</h1>
                        <p>+$44.63 (+0.04%)</p>
                    </div>
                    <div className="dashboard__chart">
                        <LineGraph />
                    </div>
                </div>
                <div className="dashboard__buying__section">
                    <h2> Buying Power</h2>
                    <h2> $4.11</h2>
                </div>
                <div className="dashboard__market__section">
                    <div className="dashboard__market__box">
                        <p> Cryptocurrency market is open 24/7</p>
                        <h1> Happy Trading!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard