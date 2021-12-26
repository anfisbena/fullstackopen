import React from 'react';
import ReactDOM from 'react-dom';
import Content from './modules/content';
import Header from './modules/header';
import Total from './modules/total';
import Expe from './modules/suma';
import Mapeo from './modules/Mapeo';

const App = () => {
  const course ={
    name: 'Half Stack application development',
    parts : [
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
  }

  return (
    <div>
      <h1><Header title={course.name}/></h1>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <p>{Expe(2,3)}</p>
      <p>{Mapeo}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))