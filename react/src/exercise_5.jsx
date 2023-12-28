import { useState } from "react"

const App_ex5 = () => {

    const quotes = [
    'A rose by any other name would smell as sweet.',
    'All that glitters is not gold.',
    'All the world\'s a stage, all the men and women merely players.' 
    ]

    const [selected, setSelected] = useState(0)

    return (
    <>
    {quotes[selected]}
    </>            
    )
}

export default App_ex5
