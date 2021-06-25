// import React, { Component } from 'react'
import React from 'react'
import './Crypto.css'
import {
    Link
} from 'react-router-dom'

import StockMiniChart from './stock_mini_chart.svg'

export class TradeCryptoHolding extends React.Component {

    render() {
        const {coin_name, image, average_price, coin_id, quantity} = this.props.coins
        
        const foundCrypto = this.props.cryptos.find(p=> p.symbol === coin_id) 
        // console.log(foundCrypto)
        const total_return = ((foundCrypto.current_price * quantity).toFixed(2)) - ((average_price * quantity).toFixed(2))
        const total_percentage_return = ((foundCrypto.current_price - average_price) / average_price) * 100

        return (
            <Link to={"/coins/" + coin_id}>
                <div id={coin_id} className="rowHoldings">
                    <div className="row__image">
                        <img key={coin_id} src={image} alt={coin_name} height={40}/>
                    </div>
                    <div className="row__intro">
                        <h1>{coin_name}</h1>
                        <p>{coin_id.toUpperCase()} Quantity: {quantity}</p>
                        <p>Average cost: ${Number(average_price).toFixed(2)}</p>
                    </div>
                    <div className="row__mini_chart">
                        <img src={StockMiniChart} height={35} alt="Mini-chart"/>
                    </div>
                    <div className="row__numbers">
                    <p className="row_percentage">Current price: ${foundCrypto.current_price.toFixed(2)} </p>
                    <p className="row__price">Total value: ${(foundCrypto.current_price * quantity).toFixed(2)}</p>
                    <p className="row_percentage">Total return: ${total_return.toFixed(2)} ({total_percentage_return.toFixed(2)}%)</p>
                    </div> 
                </div>
            </Link>
        ) 
    }
}

export default TradeCryptoHolding