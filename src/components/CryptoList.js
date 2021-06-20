import React from 'react'
import Crypto from './Crypto' 

class CryptoList extends React.Component {

    render() {
        const cryptos = this.props.cryptoData.map(c => <Crypto crypto={c} />)
        return (
            <div>
                {cryptos}
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
