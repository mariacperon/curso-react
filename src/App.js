/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'

class App extends Component{

    constructor(props){
        super(props)
        this.state ={
            nome: 'Mateus',
            contador : 0
        }
        this.aumentar = this.aumentar.bind(this)
        this.diminur = this.diminur.bind(this)
    }

    aumentar(){
        let state = this.state
        state.contador += 1
        this.setState(state)
    }

    diminur(){
        let state = this.state
        if(state.contador === 0){
            alert('Não é permitido ter contadores negativos.')
            return
        }
        state.contador -= 1
        this.setState(state)
    }

    render(){
        return (
            <div> 
                <h2>Contador:</h2>
                <h3>
                    <button onClick={this.diminur}>-</button>
                        {this.state.contador}   
                    <button onClick={this.aumentar}>+</button></h3>
            </div>
        )
    }
}

export default App