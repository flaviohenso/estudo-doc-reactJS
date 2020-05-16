import React from 'react'

class Toggle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isToggleOn: true,
        }
    }
    
    /* sintaxe de campos de classe publica */
    handleClicke = () => {
        this.setState(state => ({
            isToggleOn : !state.isToggleOn
        }))
    }

    render() {
        return (
            //essa sintaxe garante que o 'this' seja vinculado ao handleClick. 
            //Essa forma não é muito indicada por gerar uma renderizacao extra
            //<button onClick={() => this.handleClicke()}>
            <button onClick={this.handleClicke}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default Toggle