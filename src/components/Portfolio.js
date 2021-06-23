import React from 'react'
import TradeList from './TradeList'
import Trade from './Trade'

class Porfolio extends React.Component {

    render() {
        // const cryptos = this.props.cryptoData.map(c => <Crypto crypto={c} />)
        const current_portfolio = this.props.current_user.portfolios[0]
        // console.log("PORTFOLIOS")
        // console.log(this.props.current_user.portfolios)
        // console.log(this.props.current_user.portfolios[0])
        // console.log(this.props.current_user.portfolios[0].name)
        return (
            <>
            <h1>{current_portfolio.name}</h1>
            <h1>Initial balance: ${current_portfolio.initial_balance}</h1>
            <h1>Buying power: ${current_portfolio.current_balance}</h1>
            <Trade />
            <TradeList />
            </>
        )
    }
}

export default Porfolio