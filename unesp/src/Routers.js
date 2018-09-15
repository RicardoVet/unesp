import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hello from './js/component/Hello';
import Pagina from './js/component/Pagina';
import Periodo from './js/component/Periodos';
import Cadastro from './js/component/Cadastro';
import Comparador from './js/component/Comparador';

class Routers extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact= {true} path = "/"  component = {Hello} />
                    <Route path = "/pagina"  component = {Pagina} />
                    <Route path = "/periodo"  component = {Periodo} />
                    <Route path = "/cadastro"  component = {Cadastro} />
                    <Route path = "/comparador"  component = {Comparador} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routers;