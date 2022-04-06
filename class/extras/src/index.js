import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './modules/hello';

const App =()=>{
  const name="Carlos"
  const age=28
  return(
    <Hello name={name} age={age}/>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))