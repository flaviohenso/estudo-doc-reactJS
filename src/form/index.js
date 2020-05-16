import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    handlerChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleSubmit = (event) => {
        alert('Um nome foi enviada: ' + this.state.name)
        return false
    }

    render() {
        return (
            <form>
                <label>
                    Name:
                <input type='text' value={this.state.name} onChange={this.handlerChange} />
                </label>
                <input type='submit' value="Enviar" />
            </form>
        )
    }
}

export default NameForm