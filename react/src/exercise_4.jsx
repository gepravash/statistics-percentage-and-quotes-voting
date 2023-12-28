import { useState } from 'react'

const Statistics = (props) => {
        if (props.sum != 0)
        {
        return(
        <>
        <h2>good {props.good}</h2>
        <h2>neutral {props.neutral}</h2>
        <h2>bad {props.bad}</h2>
        </>
        )
        }
        else
        {
        return (
        <h2>No feedback given</h2>
        )
        }
}


const App_ex4 = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let sum = good + neutral + bad

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1> 
      <Statistics good = {good} neutral = {neutral} bad = {bad} sum = {sum} />
    </>
  )
}

export default App_ex4
