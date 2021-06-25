import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCryptos } from './actions/cryptoActions'
import { fetchLoggedInUser } from './actions/userActions'
import { logOutUser } from './actions/userActions'
import CryptoList from './components/CryptoList'
import TradeCryptoList from './components/TradeCryptoList'
import NavBar from './components/NavBar'
import NotLoggedInNavBar from './components/NotLoggedInNavBar'
import Dashboard from './components/Dashboard'
import LoginForm from './containers/loginForm'
import SignUpForm from './containers/signUpForm'
import TradeCryptoHoldingDescription from './components/TradeCryptoDescription'
import TradeCryptoHistoryList from './components/TradeCryptoHistoryList'

// import logo from './logo.svg';
import './App.css';

import Loading from './svg/Loading'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {

  fetchEverything = () => {
    this.props.fetchLoggedInUser()
    this.props.fetchCryptos()
  }

  componentDidMount() {
    // console.log(this.props) // {cryptoData: Array(0), loading: false, login: false, fetchCryptos: ƒ}
    // this.props.fetchCryptos()
    this.fetchEverything()
  }

  handleCryptoListLoading = () => {
    // console.log(this.props.loading) // Will console.log true or false
    if(this.props.loading) {
      // return <div>Loading...</div>
      return <Loading />
    } else {
      // console.log("Login")
      // console.log(this.props.login)
      // console.log(this.props.current_user)
      // console.log(this.props.current_user.first_name)
      return <CryptoList cryptoData={this.props.cryptoData} />
    }
  }

  handleTradeCryptoListLoading = () => {
    // console.log(this.props.loading) // Will console.log true or false
    if(this.props.user_loading) {
      // return <div>Loading...</div>
      return <Loading />
    } else {
      // console.log("Login")
      // console.log(this.props.login)
      // console.log(this.props.current_user)
      // console.log(this.props.current_user.first_name)
      return <TradeCryptoList cryptoData={this.props.cryptoData} current_user={this.props.current_user} />
    }
  }

  handleTradeCryptoHistoryListLoading = () => {
    // console.log(this.props.loading) // Will console.log true or false
    if(this.props.user_loading) {
      // return <div>Loading...</div>
      return <Loading />
    } else {
      // console.log("Login")
      // console.log(this.props.login)
      // console.log(this.props.current_user)
      // console.log(this.props.current_user.first_name)
      return <TradeCryptoHistoryList cryptoData={this.props.cryptoData} current_user={this.props.current_user} />
    }
  }

  // handleCryptoDescriptionLoading = (routeInfo) => {
  //   // console.log(this.props.loading) // Will console.log true or false
  //   if(this.props.user_loading) {
  //     // return <div>Loading...</div>
  //     return <Loading />
  //   } else {
  //     const paramsCoinId = routeInfo.match.params.coin_id
  //     console.log(paramsCoinId)
  //     const foundCoin = this.props.current_user.coins.find(p=> p.coin_id === paramsCoinId) 
  //     console.log(foundCoin)
  //     return <TradeCryptoHoldingDescription coins={foundCoin}/>
  //   }
  // }

  logOut = () => {
    localStorage.removeItem("token")
    this.props.logOutUser()
    alert("Succesfully log out!")
  }

  render() {
  
    // console.log(this.props.cryptoData)
    // console.log(this.props.current_user)
    return (
      <>
        <div className="App">
          <Router>
            <div className="app__navBar">
              {/* <NavBar /> */}
              {this.props.login? <NavBar logOut = {this.logOut}/> : <NotLoggedInNavBar/> }
            </div>
            <Switch>

              <Route exact path="/">   
                <div className="app__body">
                  <div className="app__container">
                    <Dashboard current_user={this.props.current_user}/>
                    {this.handleCryptoListLoading()}
                  </div>
                </div>
              </Route>

              <Route exact path="/login">
                <LoginForm />
              </Route>

              <Route exact path="/signup">
                <SignUpForm />
              </Route>

              <Route exact path="/logout">
                <h1>Loguot</h1>
              </Route>
            
              
              <Route path="/coins/:coin_id" component={(routeInfo) => {
                const paramsCoinId = routeInfo.match.params.coin_id
                const foundCoin = this.props.current_user.coins.find(p=> p.coin_id === paramsCoinId)
                const foundCrypto = this.props.cryptoData.find(p=> p.symbol === paramsCoinId)
                const foundPortfolio = this.props.current_user.portfolios.find(p=> p.name === "Initial Portfolio")
                return <TradeCryptoHoldingDescription coins={foundCoin} current_user={this.props.current_user} crypto={foundCrypto} portfolio={foundPortfolio}/>
                // {this.handleCryptoDescriptionLoading(routeInfo)}
              }}>
              </Route>

              <Route exact path="/trades">
                {/* <Porfolio current_user={this.props.current_user}/> */}
                {/* <TradeCryptoList cryptoData={this.props.cryptoData} current_user={this.props.current_user} /> */}
                {this.handleTradeCryptoHistoryListLoading()}
              </Route> 

              <Route exact path="/portfolio">
                {/* <Porfolio current_user={this.props.current_user}/> */}
                {/* <TradeCryptoList cryptoData={this.props.cryptoData} current_user={this.props.current_user} /> */}
                {this.handleTradeCryptoListLoading()}
              </Route>            

              <Route path="/" render={() => <div><h1>Oops! That page doesn't exist.</h1></div>} />

            </Switch>
          </Router>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    cryptoData: state.crypto.cryptos,
    loading: state.crypto.loading,
    login: state.user.login,
    current_user: state.user.user,
    user_loading: state.user.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCryptos: () => dispatch(fetchCryptos()),
    fetchLoggedInUser: () => dispatch(fetchLoggedInUser()),
    logOutUser: () => dispatch(logOutUser())
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
