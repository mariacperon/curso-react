import React, {Component} from "react";

class Membro extends Component{
    constructor(props){
        super(props)
        this.state = {
            status: false
        }
        this.sair = this.sair.bind(this)
        this.entrar = this.entrar.bind(this)
    }

    sair(){
        this.setState({status: false})
    }

    entrar(){
        this.setState({status: true})
    }

    render(){
        return(
            <div>
                {this.state.status ? 
                    <div>
                        <h1>Bem-vindo ao sistema!</h1>
                        <button onClick={this.sair}>Sair do sistema</button>
                    </div> : 
                    <div>
                        <h1>Olá, visitante. Faça o login!</h1>
                        <button onClick={this.entrar}>Entrar do sistema</button>
                    </div>
                }
                <div>
                    <h2>Curso react js</h2>
                </div>
            </div>
        )
    }
}

export default Membro