import React from 'react'
import TradeCrypto from './TradeCrypto'
import './CryptoList.css'
// import { db } from "../firebase"

class TradeCryptoList extends React.Component {

    render() {
        const current_user = this.props.current_user
        const cryptos = this.props.cryptoData.map(c => <TradeCrypto crypto={c} current_user={current_user}/>)
        return (
            <div className="cryptoList">
                <div className="cryptoList__container">
                    <div className="crypto__header">
                        <p>Hey {current_user.first_name}, click a cryptocurrency bellow to quickly buy 1 coin:</p>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                        {cryptos}
                        </div>
                    </div>
                    <div className="crypto__header_medium">
                        <p>My Cryptocurrency holdings</p>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                        {cryptos}
                        </div>
                    </div>
                    <div className="crypto__header_medium">
                        <p>Trade history</p>
                    </div>
                    <div className="crypto__content">
                        <div className="crypto__rows">
                        {cryptos}
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
