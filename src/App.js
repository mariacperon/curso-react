/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {useCallback, useEffect, useMemo, useState} from 'react'

function App(){

    const [tarefas, setTarefas] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('tarefas')

        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage))
        }
    }, [])

    useEffect(() => {localStorage.setItem('tarefas', JSON.stringify(tarefas))}, [tarefas])

    const handleAdd = useCallback(() => {
        setTarefas([...tarefas, input])
        setInput('')
    }, [input, tarefas])

    const totalTarefas =useMemo(() => tarefas.length, [tarefas])

    return (
        <div> 
            <button type='button' onClick={handleAdd}>Adicionar</button>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)}></input>
            <ul>
                {tarefas.map(tarefa => (
                    <li ke>{tarefa}</li>
                ))}
            </ul>
            <br/>
            <strong>Você tem {totalTarefas} tarefas.</strong>
        </div>
    )
}

export default App