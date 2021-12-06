import React from 'react';
import ReactDOM from 'react-dom';

//componente react

const GetDate=()=>{
  let now = new Date()
  return(
    <div><p>it´s {now.toString()}</p></div>
  )
}

const Suma=()=>{
  let a=10
  let b=20
  return(
    <p>{a} + {b} is {a+b}</p>
  )
}

const App = () => {
  return(
    <div>
      <p>Hello World, it´s me... Mario</p>
      <GetDate/>
      <p>also i can tell you somenthing... <Suma/></p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))