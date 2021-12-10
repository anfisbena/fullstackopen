import React from 'react';
import ReactDOM from 'react-dom';
import Content from './modules/content';
import Header from './modules/header';
import Total from './modules/total';
import Expe from './modules/suma';
import Mapeo from './modules/Mapeo';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1><Header title={course}/></h1>
      <Content subtitle={part1} value={exercises1}/>
      <Content subtitle={part2} value={exercises2}/>
      <Content subtitle={part3} value={exercises3}/>
      <Total Total={exercises1 + exercises2 + exercises3}/>
      <p>{Expe(2,3)}</p>
      <p>{Mapeo}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))