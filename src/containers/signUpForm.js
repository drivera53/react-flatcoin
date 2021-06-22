import React from 'react' 
import { connect } from 'react-redux'
import { createUser } from '../actions/userActions'

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    first_nameError: '',
    last_nameError: '',
    emailError: '',
    passwordError: ''
}

class SignUpForm extends React.Component{
    state = initialState

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validate = () => {
        let isValid = true
        let first_nameError = ""
        let last_nameError = ""
        let emailError = ""
        let passwordError = ""

        if ((!this.state.email)||(!this.state.email.includes("@"))){
            emailError = "Invalid email"
        }

        if (!this.state.password){
            passwordError = "Password can't be blank"
        }

        if (!this.state.first_name){
            first_nameError = "First name can't be blank"
        }

        if (!this.state.last_name){
            last_nameError = "Last name can't be blank"
        }

        if (emailError||passwordError||first_nameError||last_nameError){
            this.setState({first_nameError, last_nameError, emailError, passwordError})
            isValid = false
        }
        return isValid
    }

    handleSubmit = event => {
        event.preventDefault()
        if(this.validate()){
            this.props.createUser(this.state)
            this.setState({
                first_name: "",
                last_name: "",
                email: "",
                password: ""
            })
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>
                <label>First Name</label>
                <input 
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                    onChange={this.handleChange}
                    value={this.state.first_name}
                />
                {this.state.first_nameError ? <div className="error">{this.state.first_nameError}</div>: null}
                <input 
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                    value={this.state.last_name}
                />
                {this.state.last_nameError ? <div className="error">{this.state.last_nameError}</div>: null}
                <input 
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={this.handleChange}
                    value={this.state.email}
                />
                {this.state.emailError ? <div className="error">{this.state.emailError}</div>: null}
                <input 
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={this.state.password}
                />
                {this.state.passwordError ? <div className="error">{this.state.passwordError}</div>: null}
                <input type='submit'/>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: (userInfo) => dispatch(createUser(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(SignUpForm)