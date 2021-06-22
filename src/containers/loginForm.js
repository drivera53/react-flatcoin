import React from 'react' 
import { connect } from 'react-redux'
import { loginUserFetch } from '../actions/userActions'

const initialState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
}

class LoginForm extends React.Component{
    state = initialState

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validate = () => {
        let isValid = true 
        let passwordError = ''
        let emailError = ''

        if ((!this.state.email) || (!this.state.email.includes("@"))){
            emailError = "Invalid email"
        }

        if (!this.state.password){
            passwordError = "Please enter your password to log in!"
        }

        if (emailError || passwordError){
            this.setState({emailError, passwordError})
            isValid = false
        }

        return isValid
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.validate()){
            this.props.loginUserFetch(this.state)
            this.setState(initialState)
        }
    }

    authenticateUser = (j) => {
        if (j.status === "error"){
            alert(j.message)
        } else {
            this.props.loginUserFetch(j)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Login Form</h1>
                <label>Email</label>
                <input
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <label>Password</label>
                <input 
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                {this.state.passwordError ? <div className="error">{this.state.passwordError}</div>: null}
                <input type='submit'/>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUserFetch: (userInfo) => dispatch(loginUserFetch(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)