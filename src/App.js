import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCryptos} from './actions/cryptoActions'
import CryptoList from './components/CryptoList'

// import logo from './logo.svg';
import './App.css';

import Loading from './svg/Loading'

class App extends Component {

  componentDidMount() {
    console.log(this.props) // {cryptoData: Array(0), loading: false, fetchCryptos: ƒ}
    this.props.fetchCryptos()
  }

  handleLoading = () => {
    console.log(this.props.loading) // Will console.log true or false
    if(this.props.loading) {
      // return <div>Loading...</div>
      return <Loading />
    } else {
      return <CryptoList cryptoData={this.props.cryptoData} />
    }
  }

  render() {
    console.log(this.props.cryptoData)
    return (
      <div className="App">
        <h1>Cryptos:</h1>
        {this.handleLoading()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cryptoData: state.cryptos,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCryptos: () => dispatch(fetchCryptos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
