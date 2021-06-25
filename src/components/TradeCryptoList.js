import React from 'react'
import TradeCrypto from './TradeCrypto'
import TradeCryptoHolding from './TradeCryptoHolding'
import TradeCryptoHistory from './TradeCryptoHistory'

import './CryptoList.css'

class TradeCryptoList extends React.Component {
    
    render() {
        const current_user = this.props.current_user
        // console.log("Current User")
        // console.log(current_user)
        // const current_portfolio = this.props.current_user.portfolios[0]
        const cryptos = this.props.cryptoData.map(c => <TradeCrypto crypto={c} current_user={current_user}/>)
        const trades = current_user.trades.map(c => <TradeCryptoHistory trade={c}/>)
        const cryptosHoldings = this.props.current_user.coins.map(c => <TradeCryptoHolding coins={c} cryptos={this.props.cryptoData}/>)
        const current_portfolio = current_user.portfolios[0]
        // const trades = this.props.current_user.trades.map(c => <TradeCryptoHistory trade={c}/>)
        return (
            <div className="cryptoList">
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <h1>Hi {current_user.first_name},</h1>
                        <h1>{current_portfolio.name} <a href="./">Switch portfolios.</a></h1>
                        <h1>Initial balance: ${(current_portfolio.initial_balance * 1).toFixed(0) }</h1>
                        <h1>Portfolio total value: $ TODO</h1>
                        <h1>Buying power: ${(current_portfolio.current_balance * 1).toFixed(2)}</h1>
                        <h1>Total return: $ TODO</h1>
                    </div>

                    <div className="crypto__header_medium">
                        <p>My Cryptocurrency holdings</p>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                        {cryptosHoldings}
                        </div>
                    </div>

                    <div className="crypto__header_medium">
                        <p>Click a cryptocurrency bellow to quickly buy 1 coin:</p>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                        {cryptos}
                        </div>
                    </div>

                    <div className="crypto__header_medium">
                        <p>Trading history</p>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                        {trades}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default TradeCryptoList

// class CryptoList extends React.Component {
//     listCryptos = () => {
//         return this.props.cryptoData.map(crypto => <img key={crypto.id} src={crypto.image} alt={crypto.name} />)
//     }


//     render() {
//         return (
//             <div>
//                 {this.listCryptos()}
//             </div>
//         )
//     }
// }

// export default CryptoList
