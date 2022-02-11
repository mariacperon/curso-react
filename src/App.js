import React from 'react'

const Bemvindo = (props) => {
    return (
        <div>
            <h2>Bem-vindo(a), {props.nome}</h2>
            <h3>Tenho {props.idade} anos</h3>
        </div> 
    )}

function App(){
    return (
        <div> 
            Olá, mundo!
            <Bemvindo nome="Matheus" idade="19"/>
            <Bemvindo nome="Maria" idade="21"/>
            <h1>Curso react</h1>
        </div>
    )
}

export default App