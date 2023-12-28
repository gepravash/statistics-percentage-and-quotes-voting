import { useState } from "react"

const App_ex8 = () => {

    const quotes = [
    'A rose by any other name would smell as sweet.',
    'All that glitters is not gold.',
    'All the world\'s a stage, all the men and women merely players.' 
    ]
    const points = { 0: 0, 1: 0, 2: 0}

    const [selected, setSelected] = useState(0)
    const [voteState, setVoteState] = useState(points)

        let max = voteState[0];
        let maxindex = selected;
        const arrkeys = Object.keys(voteState)

        for (let i in arrkeys)
        {

                if (max < voteState[i])
                {
                    max = voteState[i]
                    maxindex = i
                }
            
        }

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
    <h1>Quotes of the day</h1>
    <h4>{quotes[maxindex]}</h4>
    <h4>has {voteState[maxindex]} votes</h4>


    <h1>Quotes</h1>
    <h4>{quotes[selected]}</h4>
    <h4>has {voteState[selected]} votes</h4>
    <button onClick={handleVote}>Vote</button>
    <button onClick={handleClick}>Next quote</button>
    </>            
    )
}

export default App_ex8
