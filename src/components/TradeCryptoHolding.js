// import React, { Component } from 'react'
import React from 'react'
import './Crypto.css'

import StockMiniChart from './stock_mini_chart.svg'

export class TradeCryptoHolding extends React.Component {

    render() {
        const {coin_name, image, average_price, coin_id, quantity} = this.props.coins

        return (
            <div id={coin_id} className="row">
                <div className="row__image">
                    <img key={coin_id} src={image} alt={coin_name} height={40}/>
                </div>
                <div className="row__intro">
                    <h1>{coin_name}</h1>
                    <p>{coin_id.toUpperCase()} Quantity: {quantity}</p>
                    <p>Average price: ${average_price}</p>
                </div>
                <div className="row__mini_chart">
                    <img src={StockMiniChart} height={35} alt="Mini-chart"/>
                </div>
                <div className="row__numbers">
                    <p className="row_percentage">Total return: $ TODO</p>
                    <p className="row__price">Total value: ${(average_price * quantity).toFixed(2)}</p>
                </div> 
            </div>
        ) 
    }
}

export default TradeCryptoHolding