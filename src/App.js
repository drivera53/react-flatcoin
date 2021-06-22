import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCryptos } from './actions/cryptoActions'
import { fetchLoggedInUser } from './actions/userActions'
import { logOutUser } from './actions/userActions'
import CryptoList from './components/CryptoList'
import NavBar from './components/NavBar'
import NotLoggedInNavBar from './components/NotLoggedInNavBar'
import Dashboard from './components/Dashboard'
import LoginForm from './containers/loginForm'

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
    this.props.fetchCryptos()
    this.props.fetchLoggedInUser()
  }

  componentDidMount() {
    console.log(this.props) // {cryptoData: Array(0), loading: false, login: false, fetchCryptos: ƒ}
    // this.props.fetchCryptos()
    this.fetchEverything()
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

  // handleLogoutClick = event => {
  //   event.preventDefault()
  //   // Remove the token from localStorage
  //   localStorage.removeItem("token")
  //   // Remove the user object from the Redux store
  //   this.props.logoutUser()
  // }

  logOut = () => {
    localStorage.removeItem("token")
    this.props.logOutUser()
    alert("Succesfully log out!")
  }

  render() {
    console.log(this.props.cryptoData)
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
                    <Dashboard />
                    {this.handleLoading()}
                  </div>
                </div>
              </Route>

              <Route exact path="/login">
                <LoginForm />
              </Route>

              <Route exact path="/signup">
                <h1>SignUp</h1>
              </Route>

              <Route exact path="/logout">
                <h1>Loguot</h1>
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
    login: state.user.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCryptos: () => dispatch(fetchCryptos()),
    fetchLoggedInUser: () => dispatch(fetchLoggedInUser()),
    logOutUser: () => dispatch(logOutUser)
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
