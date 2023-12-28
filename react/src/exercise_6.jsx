import { useState } from "react"

const App_ex6 = () => {

    const quotes = [
    'A rose by any other name would smell as sweet.',
    'All that glitters is not gold.',
    'All the world\'s a stage, all the men and women merely players.' 
    ]

    const [selected, setSelected] = useState(0)

    const handleClick = () => {
        if (selected != 2)
        { setSelected(() => selected + 1)
        }
        else
        {
          setSelected(() => 0)
        }
    }

    return (
    <>
    <h4>{quotes[selected]}</h4>
    <button onClick={handleClick}>Next quote</button>
    </>            
    )
}

export default App_ex6
