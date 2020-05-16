import React from 'react';
import Relogio from './relogio/index'
import Actionlink from './manipulacaoEvento/actionLink'
import Toggle from './manipulacaoEvento/buttonOnOff'
import LogiControll from './manipulacaoEvento/loginController'
import NameForm from './form/index'

function App() {
  return (
    <div className="App">
      <Relogio />
      <Actionlink />
      <Toggle/>
      {/* <Greeting isLoggeIn={true}/> */}
      <LogiControll/>
      <NameForm/>
    </div>
  );
}

//setInterval(Tick, 1000);

export default App;
