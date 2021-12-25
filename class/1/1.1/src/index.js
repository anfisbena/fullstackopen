import React from 'react';
import ReactDOM from 'react-dom';
import Content from './modules/content';
import Header from './modules/header';
import Total from './modules/total';
import Expe from './modules/suma';
import Mapeo from './modules/Mapeo';

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1><Header title={course}/></h1>
      <Content subtitle={part1.name} value={part1.exercises}/>
      <Content subtitle={part2.name} value={part2.exercises}/>
      <Content subtitle={part3.name} value={part3.exercises}/>
      <Total Total={part1.exercises + part2.exercises + part3.exercises}/>
      <p>{Expe(2,3)}</p>
      <p>{Mapeo}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))