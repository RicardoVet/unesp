import React, { Component } from 'react';

class Header extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    {/* <li><a href="/pagina">Paginas</a></li>
                    <li><a href="/periodo">Periodo</a></li> */}
                    <li><a href="/cadastro">Cadastro</a></li>
                    <li><a href="/comparador">Comparador</a></li>
                </ul>
            </nav>
        );
    }
}

export default Header;