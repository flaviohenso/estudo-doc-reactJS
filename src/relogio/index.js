import React from 'react'

/* const Relogio = (props) => (
  <div>
    <h1>Hora Local</h1>
    <h2>{props.date.toLocaleTimeString()}</h2>
  </div>
  // ReactDOM.render(element, document.getElementById('root')) 
)


const Tick = () => {
  ReactDOM.render(
    <Relogio date={new Date()} />,
    document.getElementById('root')
  )
}

export default Tick */


export default class Relogio extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date(), }
  }


  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({ date: new Date() })
  }

  render() {
    return (
      <div>
        <h1>Hora Local</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}