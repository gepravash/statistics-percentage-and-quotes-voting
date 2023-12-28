import { useState } from "react"

const App_ex7 = () => {

    const quotes = [
    'A rose by any other name would smell as sweet.',
    'All that glitters is not gold.',
    'All the world\'s a stage, all the men and women merely players.' 
    ]
    const points = { 0: 0, 1: 0, 2: 0}

    const [selected, setSelected] = useState(0)
    const [voteState, setVoteState] = useState(points)

    const handleClick = () => {
        if (selected != 2)
        { setSelected(() => selected + 1)
        }
        else
        {
          setSelected(() => 0)
        }
    }

    const handleVote = () => {
        voteState[selected] = voteState[selected] + 1;
        setVoteState({...voteState})
    }

    return (
    <>
    <h1>Quotes</h1>
    <h4>{quotes[selected]}</h4>
    <h4>has {voteState[selected]} votes</h4>
    <button onClick={handleVote}>Vote</button>
    <button onClick={handleClick}>Next quote</button>
    </>            
    )
}

export default App_ex7
