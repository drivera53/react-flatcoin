import React from 'react' 

class CryptoList extends React.Component {
    listCryptos = () => {
        return this.props.cryptoData.map(crypto => <img key={crypto.id} src={crypto.image} alt={crypto.name} />)
    }


    render() {
        return (
            <div>
                {this.listCryptos()}
            </div>
        )
    }
}

export default CryptoList
