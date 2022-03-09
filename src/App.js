/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react'

function App(){

    const [tarefas, setTarefas] = useState([
        'Pagar a conta de luz',
        'Estudar React Hooks'
    ])

    const [input, setInput] = useState('')

    function handleAdd(){
        setTarefas([...tarefas, input])
        setInput('')
    }

    return (
        <div> 
            <button type='button' onClick={handleAdd}>Adicionar</button>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)}></input>
            <ul>
                {tarefas.map(tarefa => (
                    <li ke>{tarefa}</li>
                ))}
            </ul>
        </div>
    )
}

export default App