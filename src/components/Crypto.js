import React, { Component } from 'react'
import './Crypto.css' 

export class Crypto extends React.Component {
    render() {
        const {name, image, id, current_price, price_change_percentage_24h, symbol} = this.props.crypto
        return (
            <div id="crypto" className="row">
                <div>
                    <img key={id} src={image} alt={name} height={50}/>
                </div>
                <div className="row__intro">
                    <h1>{name}</h1>
                    <p>{symbol} - 200 Coins</p>
                </div>
                <div className="row__numbers">
                    <p className="row__price">${current_price}</p>
                    <p className="row_percentage">{price_change_percentage_24h}%</p>
                </div> 
            </div>
        ) 
    }
}

export default Crypto 