import React from 'react'
import './Dashboard.css'
// import LineGraph from './LineGraph'

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
                        {/* <LineGraph /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard