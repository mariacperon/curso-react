/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {useCallback, useEffect, useMemo, useState} from 'react'

//https://sujeitoprogramador.com/rn-api/?api=posts

function App(){
    const [nutri, setNutri] = useState([])

    useEffect(() => {
        function loadAPI(){
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
            fetch(url).then((r) => r.json()).then((json) => {
                setNutri(json)
            })
        }

        loadAPI()
    }, [])

    return (
        <div className="container"> 
            <header>
                <h1>react nutri</h1>
            </header>
        </div>
    )
}

export default App