import React, {Component} from "react";

class Membro extends Component{
    constructor(props){
        super(props)
        this.state = {
            nome: props.nome
        }
        this.entrar = this.entrar.bind(this)
        this.sair = this.sair.bind(this)
    }

    entrar(){
        this.setState({nome: 'Maria'})
    }

    sair(){
        this.setState({nome: 'visitante'})
    }

    render(){
        return(
            <div>
                <h2>Bem-vinda(o), {this.state.nome}!</h2>
                <button onClick={this.entrar}>Entrar como Maria</button>
                <button onClick={this.sair}>Sair</button>
            </div>
        )
    }
}

export default Membro