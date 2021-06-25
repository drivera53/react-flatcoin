import React from 'react'
import './Dashboard.css'
import LineGraph from './LineGraph'

class Dashboard extends React.Component {
    render() {

// function Dashboard() {
    const current_user = this.props.current_user
    // const current_portfolio = current_user.portfolios[0]

        return (
            <div className="dashboard">
                <div className="dashboard__container">
                    <div className="dashboard__chartSection">
                        <div className="dashboard__portfolio">
                            <h1>Welcome! {current_user.first_name}</h1> 
                            <h1>$114656</h1>
                            <p>+$44.63 (+0.04%)</p>
                        </div>
                        <div className="dashboard__chart">
                            <LineGraph />
                        </div>
                    </div>
                    <div className="dashboard__buying__section">
                        <h2> Buying Power</h2>
                        {/* <h2> ${(current_portfolio.current_balance * 1).toFixed(2)}</h2> */}
                        <h2>$44.63</h2>
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
}

export default Dashboard