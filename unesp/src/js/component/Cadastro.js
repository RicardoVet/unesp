import React, { Component } from 'react';
import '../../css/component/CadastroStyle.css';
import Formulario from './Formulario';


class Cadastro extends Component {
    
    render() {
        return (
            <div style={{ margin: 'auto', paddingLeft: '280px', paddingRight: '280px' }}>
                <Formulario />
            </div>
        );
    }
}

export default Cadastro;