// import React, { Component } from 'react'
import React from 'react'
import './Crypto.css'

import StockMiniChart from './stock_mini_chart.svg'

class TradeCryptoHistory extends React.Component {

    render() {
        const {coin_id, coin_name, id, portfolio_id, price, quantity, user_id, created_at, image} = this.props.trade

        return (
            <div id={coin_id} className="row">
                <div className="row__image">
                    <img key={coin_id} src={image} alt={coin_name} height={40}/>
                </div>
                <div className="row__intro">
                    <h1>{coin_name}</h1>
                    <p>{created_at}</p>
                </div>
                <div className="row__mini_chart">
                    <img src={StockMiniChart} height={35} alt="Mini-chart"/>
                </div>
                <div className="row__numbers">
                    <p className="row__price">${price}</p>
                    <p className="row_percentage">Quantity: {quantity}</p>
                </div> 
            </div>
        ) 
    }
}

export default (TradeCryptoHistory) 