import React from 'react'
import TradeCrypto from './TradeCrypto'
import './CryptoList.css'
// import { db } from "../firebase"

class TradeCryptoList extends React.Component {

    render() {
        const cryptos = this.props.cryptoData.map(c => <TradeCrypto crypto={c} />)
        const current_user = this.props.current_user
        return (
            <div className="cryptoList">
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <p>Hey {current_user.first_name}, pick a cryptocurrency bellow to get started:</p>
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
