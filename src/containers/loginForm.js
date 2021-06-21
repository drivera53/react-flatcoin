import React from 'react' 
import { connect } from 'react-redux'
// import { loginUserFetch } from '?'

const initialState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
}

class LoginForm extends React.Component{
    state = initialState

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validate = () => {
        let isValid = true 
        let passwordError = ''
        let emailError = ''

        if ((!this.state.email) || (!this.email.includes("@"))){
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
            <form>
                <h1>Login Form</h1>
                <label>Email</label>
                <input
                    name="email"
                    placeholder="email"
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
                <input type='submit'/>
            </form>
        )
    }
}

export default LoginForm