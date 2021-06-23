// import React, { Component } from 'react'
import React from 'react'
import './Crypto.css' 
import StockMiniChart from './stock_mini_chart.svg'

export class TradeCrypto extends React.Component {

    // handleBuySubmit = event => {
    //     event.preventDefault()
    //     console.log("Buy", id)
    // }

    render() {
        const {name, image, id, current_price, price_change_percentage_24h, symbol} = this.props.crypto

        const handleBuySubmit = () => {
            console.log("Buy", id)
        }



        // handleSubmit = event => {
        //     event.preventDefault()
        //     if (this.validate()){
        //         this.props.loginUserFetch(this.state)
        //         this.setState(initialState)
        //     }
        // }

        return (
            <div id={id} className="row" onClick={handleBuySubmit}>
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

export default TradeCrypto 