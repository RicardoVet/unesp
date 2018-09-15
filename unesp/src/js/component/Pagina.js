import React, { Component } from 'react';
import {listAllPage} from '../rest/PaginaRest';

class Pagina extends Component {
  constructor(props){
    super(props)

    this.state = {
      pessoas : []
    }
  }

  componentDidMount(){
    listAllPage().then(data =>this.setState({ pessoas : data }))
  }

  render() {
    let pessoas = this.state.pessoas;
    return (
      <div className="container">
        <ul className="nav nav-tabs">
          <li className="active"><a data-toggle="tab" href="#integral">Integral</a></li>
          <li><a data-toggle="tab" href="#noturno">Noturno</a></li>
        </ul>

        <div className="tab-content">
          <div id="integral" className="tab-pane fade in active">
            <h3>Integral</h3>
            <p>Conteúdo a ser discutido.</p>
          </div>
          <div id="noturno" className="tab-pane fade">
            <h3>Noturno</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CPF</th>
                </tr>
              </thead>
              <tbody>
                {pessoas.map((pessoa, index) =>(
                    <tr>
                        <td>{pessoa.nome}</td>
                        <td>{pessoa.cpf}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagina;