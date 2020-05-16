import React from 'react'

const UserGreeting = () => <h1>Bem vindo de volta!</h1>

const GuestGreeting = () => <h1>Por favor, faça o login!</h1>

const Greeting = props => {
    const isLoggeIn = props.isLoggedIn
    return isLoggeIn ? <UserGreeting/> : <GuestGreeting/>
}

export default Greeting