import { useState } from 'react'

const Statistics = (props) => {
    return (
    <>
    <h2>good {props.good}</h2>
    <h2>neutral {props.neutral}</h2>
    <h2>bad {props.bad}</h2>
    </>
    )
}


const App_ex3 = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1> 
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </>
  )
}

export default App_ex3
