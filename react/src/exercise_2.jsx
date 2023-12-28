import { useState } from "react";

const App_ex2 = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    let sum = good + bad + neutral

    const percentage = (value) => {
        return value/sum*100
    }

    return (
    <>
    <h1>give feedback</h1>
    <button onClick={() => setGood(good + 1)}>good</button>
    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    <button onClick={() => setBad(bad + 1)}>bad</button>
    <h1>Percentage</h1>
    <h3>Good {percentage(good)}%</h3>
    <h3>Neutral {percentage(neutral)}%</h3>
    <h3>Bad {percentage(bad)}%</h3>
    </>
    )
}

export default App_ex2