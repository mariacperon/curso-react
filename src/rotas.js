import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function RotasApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" component={Home}/>
                <Route path="/sobre" component={Sobre}/>
                <Route path="/contato" component={Contato}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RotasApp