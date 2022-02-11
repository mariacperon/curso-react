/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'

class Equipe extends Component{
    render(){
        return (
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
                <Social fb={this.props.fb}/>
                <hr/>
            </div> 
        )
    }
}

class Sobre extends Component{
    render(){
        return (
            <div>
                <h2>Olá, sou a(o) {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade} anos</h3>
            </div> 
    )
    }
}

class Social extends Component {
    render(){
        return (
            <div>
                <a href={this.props.fb}>Facebook </a>
                <a>Linkedin </a>
                <a>Youtube</a>
            </div> 
    )
    }
}


function App(){
    return (
        <div> 
            <h1>Conheça nossa equipe: </h1>
            <Equipe nome="Lucas" cargo="programador" idade="29" fb="https://google.com"/>
            <Equipe nome="Maria" cargo="designer" idade="18" fb="https://google.com"/>
        </div>
    )
}

export default App