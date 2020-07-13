import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistic = ({text, value}) => (
  <tbody><tr><td>{text}:</td><td>{value}</td></tr></tbody>
)

const Statistics = ({good, bad, neutral}) => {
  const sum = good + bad + neutral
  const average_score = () => (good - bad) / sum
  const positive_percentage = () => good * 100 / (sum) + ' %'

  if (sum === 0) {
    return (
        <p>No feedback given</p>
      )
    }

  return (
    <table>
      <Statistic text='good' value={good}/>
      <Statistic text='neutral' value={neutral}/>
      <Statistic text='bad' value={bad}/>
      <Statistic text='all' value={sum}/>
      <Statistic text='average' value={average_score()}/>
      <Statistic text='positive' value={positive_percentage()}/>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text={'Good'}/>
      <Button handleClick={() => setNeutral(neutral + 1)} text={'Neutral'}/>
      <Button handleClick={() => setBad(bad + 1)} text={'Bad'}/>
      <h2>statistics:</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))