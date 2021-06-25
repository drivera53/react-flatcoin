// import React, { Component } from 'react'
import React from 'react'
import './Crypto.css'
import { createTradeFetch } from '../actions/userActions'
import { connect } from 'react-redux'

import {
    Link
} from 'react-router-dom'

import StockMiniChart from './stock_mini_chart.svg'

export class TradeCryptoHoldingDescription extends React.Component {
    state = {
        coin_name: this.props.coins.coin_name,
        coin_id: this.props.coins.coin_id,
        price: Number(this.props.coins.average_price),
        quantity_field: '',
        image: this.props.coins.image,
        portfolio_id: this.props.coins.portfolio_id,
        user_id: this.props.coins.user_id,
        tradeBuySell: 1,
        quantity: 1
    }

    handleChange = event => {
        this.setState({
            // [event.target.name]: Number(event.target.value)
            quantity_field: Number(event.target.value),
            quantity: Number(event.target.value)
        })
        // console.log(this.state)
    }

    buySellChange = event => {
        this.setState({
            tradeBuySell: event.target.value,
            quantity: Number(event.target.value) * this.state.quantity_field
        })
        // this.setState({
        //     quantity: this.state.quantity * this.state.tradeBuySell
        // })
        // onChange={this.buySellChange}
        // console.log(event.target.value)
        // console.log(this.state.tradeBuySell)
        console.log(this.state.quantity)
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.createTradeFetch(this.state)
        this.setState({
            quantity: ""
        })
    }

    render() {
        const {average_price, coin_id, coin_name, id, image, portfolio_id, quantity, user_id} = this.props.coins
        const current_user = this.props.current_user
        const current_portfolio = current_user.portfolios[0]

        return (
            <>
                <h1>Buying Power: ${(current_portfolio.current_balance * 1).toFixed(2)}</h1>
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
                <form onSubmit={this.handleSubmit}>
                    <h1>Trade</h1>
                    <label>Quantity:</label>
                    <select id="buySell" onChange={this.buySellChange} >
                        <option value="1">Buy</option>
                        <option value="-1">Sell</option>
                    </select>
                    <br></br>
                    <input
                        name="quantity"
                        placeholder="Quantity"
                        onChange={this.handleChange}
                        value={this.state.quantity_field}
                    />
                    <input type='submit'/>
                    <h1>Total: ${(this.state.quantity_field * average_price * this.state.tradeBuySell).toFixed(2)}</h1>
                </form>

            </>
        ) 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createTradeFetch: (tradeInfo) => dispatch(createTradeFetch(tradeInfo))
    }
}

export default connect(null, mapDispatchToProps)(TradeCryptoHoldingDescription)