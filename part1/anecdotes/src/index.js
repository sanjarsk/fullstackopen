import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Anecdote = ({anecdotes, points, elementIndex}) => {
  return (
    <>
      <p>{anecdotes[elementIndex]}</p>
      <p>has {points[elementIndex]} votes</p>
    </>
  )
}

const PopularAnecdote = ({anecdotes, points}) => {
  const votesSum = points.reduce((v, acc) => v + acc)

  if (votesSum === 0) {
    return (null)
  }
  const maxVote = points.reduce((a, b) => Math.max(a, b))
  const maxVoteIndex = points.indexOf(maxVote)

  return (
    <>
      <h2>Anecdote with most votes</h2>
      <Anecdote anecdotes={anecdotes} elementIndex={maxVoteIndex} points={points}/>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const randomizeAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const handleVote = () => {
    const newPoints = [...points]
    newPoints[selected] = points[selected] + 1
    setPoints(newPoints)
  }

  return (
    <div>
      <Anecdote anecdotes={anecdotes} points={points} elementIndex={selected}/>
      <Button handleClick={handleVote} text={'vote'}/>
      <Button handleClick={randomizeAnecdote} text={'next anecdote'}/>
      <PopularAnecdote anecdotes={anecdotes} points={points} selected={selected}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)