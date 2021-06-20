import React from 'react'
import Crypto from './Crypto'
import './CryptoList.css'

class CryptoList extends React.Component {

    render() {
        const cryptos = this.props.cryptoData.map(c => <Crypto crypto={c} />)
        return (
            <div className="cryptoList">
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <p>Top 20 Cryptocurrencies</p>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                        {cryptos}
                        </div>
                    </div>
                    <div className="crypto__header">
                        <p>My List</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CryptoList

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
