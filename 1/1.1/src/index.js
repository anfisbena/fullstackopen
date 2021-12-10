import React from 'react';
import ReactDOM from 'react-dom';
import Header from './modules/header';
import Content from './modules/content';
import Total from './modules/total';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
      <Header title={course.name}/>
      <Content subtitle={course.parts}/>
      <Total Total={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))