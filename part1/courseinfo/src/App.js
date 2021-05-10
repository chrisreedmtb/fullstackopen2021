import React from 'react'


const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
  return (
    <p>{props.partname} {props.num_exercises}</p>
  )
}

const Total = (props) => {

  return (
    <p>Number of exercises { props.num_exercises1 + props.num_exercises2 + props.num_exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />

      <Part partname={part1.name} num_exercises={part1.exercises} />
      <Part partname={part2.name} num_exercises={part2.exercises} />
      <Part partname={part3.name} num_exercises={part3.exercises} />

      <Total num_exercises1={part1.exercises} num_exercises2={part2.exercises} num_exercises3={part3.exercises} />
    </div>
  )
}

export default App