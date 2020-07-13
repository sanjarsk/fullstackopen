import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => <h1>{course.name}</h1>

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Content = ({course}) => (
  <>
    <Part part={course.parts[0]}/>
    <Part part={course.parts[1]}/>
    <Part part={course.parts[2]}/>
  </>
)

const Total = ({course}) => {
  const total = course.parts.reduce(
    (acc, currentValue) => acc + currentValue.exercises
    , 0
  )
  return (
    <p>Number of exercises {total}</p>
  )
}

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
    <>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))