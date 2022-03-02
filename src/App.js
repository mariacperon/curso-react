import React, {Component} from 'react'
import './estilo.css'

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            textoFrase: ''
        }
        this.quebraBiscioto = this.quebraBiscioto.bind(this)
        this.frases = ['Sigo os bons e apenda com eles.',
                        'O riso é a menor distância entre duas pessoas.',
                        'Deixe de lado as preocupações e seja feliz.',
                        'Realize o óbvio, pense no improvável e conquiste o impossível.',
                        'Acredite em milagres, mas não dependa deles.',
                        'A maior barreira para o sucesso é o medo do fracasso.']
    }

    quebraBiscioto(){
        let state = this.state
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
        state.textoFrase = '"' + this.frases[numeroAleatorio] + '"'
        this.setState(state)
    }
    
    render(){
        return (
            <div className='container'> 
                <img src={require('./assets/biscoito.png')} className="img"/>
                <Botao nome='abrir biscoito' acaoBtn={this.quebraBiscioto}/>
                <h3 className='textoFrase'>{this.state.textoFrase}</h3>
            </div>
        )
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}

export default App