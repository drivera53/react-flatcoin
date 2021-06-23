// import React, { Component } from 'react'
import React from 'react'
import './Crypto.css'
import { createTradeFetch } from '../actions/userActions'

import StockMiniChart from './stock_mini_chart.svg'
import { connect } from 'react-redux'

export class TradeCrypto extends React.Component {

    handleBuySubmit = event => {
        event.preventDefault()
        const tradeObject = {
            coin_name: this.props.crypto.name,
            coin_id: this.props.crypto.id,
            price: this.props.crypto.current_price,
            quantity: 1,
            user_id: this.props.current_user.id,
            portfolio_id: this.props.current_user.portfolios[0].id
        }
        console.log("Buy")
        console.log(tradeObject)
        this.props.createTradeFetch(tradeObject)
    }

    render() {
        const {name, image, id, current_price, price_change_percentage_24h, symbol} = this.props.crypto

        return (
            <div id={id} className="row" onClick={this.handleBuySubmit}>
                <div className="row__image">
                    <img key={id} src={image} alt={name} height={40}/>
                </div>
                <div className="row__intro">
                    <h1>{name}</h1>
                    <p>{symbol.toUpperCase()}</p>
                </div>
                <div className="row__mini_chart">
                    <img src={StockMiniChart} height={35} alt="Mini-chart"/>
                </div>
                <div className="row__numbers">
                    <p className="row__price">${current_price}</p>
                    <p className="row_percentage">{price_change_percentage_24h.toFixed(2)}%</p>
                </div> 
            </div>
        ) 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createTradeFetch: (tradeInfo) => dispatch(createTradeFetch(tradeInfo))
    }
}

export default connect(null, mapDispatchToProps)(TradeCrypto) 