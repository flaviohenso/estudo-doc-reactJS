import React from 'react'
import Greeting from './renderizacaoCondicional'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

class LoginControll extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    handleLoginClick = () => {

        this.setState({ isLoggedIn: true })
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false })
    }

    render() {

        let button

        button = this.state.isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} /> 

        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {button}
            </div>
        )
    }
}

export default LoginControll