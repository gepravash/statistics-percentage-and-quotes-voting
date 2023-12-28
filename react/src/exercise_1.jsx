import { useState } from 'react'


const App_ex1 = () => {
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
      <h2>good {good}</h2>
      <h2>neutral {neutral}</h2>
      <h2>bad {bad}</h2>
    </>
  )
}

export default App_ex1
