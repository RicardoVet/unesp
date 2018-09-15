import React, { Component } from 'react';
import Formulario from './Formulario';
import '../../css/component/Comparador_style.css';
import { Disciplinas } from '../rest/FormularioRest';

class Comparador extends Component {

    constructor(props) {
        super(props);

        this.state = {
            disciplinas: []
        }

        this.action_curso = this.action_curso.bind(this);
        this.action_departamento = this.action_departamento.bind(this);
        this.change = this.change.bind(this);
    }

    componentDidMount() {
        this.disciplinas();
    }

    action_curso(event) {
        this.editForm.setState({ curso: this.form.state.curso });
    }

    action_departamento(event) {
        this.editForm.setState({ departamento: this.form.state.departamento });
    }

    action_codigo(event) {
        this.editForm.setState({ codigo: this.form.state.codigo });
    }

    action_disciplina(event) {
        this.editForm.setState({ disciplina: this.form.state.disciplina });
    }

    action_seriacao(event) {
        this.editForm.setState({ seriacao: this.form.state.seriacao });
    }

    action_anual(event) {
        this.editForm.setState({ anual: this.form.state.anual });
    }

    change(event) {
        alert(event.target.value);
    }

    disciplinas() {
        Disciplinas().then(data => this.setState({ disciplinas: data }));
    }

    render() {
        let disciplinas = this.state.disciplinas;
        return (
            <div className="row">
                <div style={{ paddingBottom: '120px' }}>
                    <div className="container col-md-4">
                        <form>
                            <div className="form-group" style={{ width: '300px' }}>
                                <label htmlFor="sel1">Disciplina:</label>
                                <select className="form-control" id="sel1" onChange={this.change}>
                                    {disciplinas.map((disciplina, index) => (
                                        <option>{disciplina}</option>
                                    ))}
                                </select>
                            </div>
                        </form>
                    </div>

                    <div className="container col-md-4">
                        <form>
                            <div className="form-group" style={{ width: '300px' }}>
                                <label htmlFor="sel1">Versão:</label>
                                <select className="form-control" id="sel1" onChange={this.change}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </form>
                    </div>

                    <div className="container col-md-2">
                        <p style={{textAlign:'center'}}>Periodos:</p>
                        <form>
                            <label className="checkbox-inline">
                                <input type="checkbox" value="" />Integral
                            </label>
                            <label className="checkbox-inline">
                                <input type="checkbox" value="" />Noturno
                            </label>
                        </form>
                    </div>
                </div>

                <div className="col-md-5" style={{ borderRightStyle: 'solid' }}>
                    <Formulario ref={(props) => this.editForm = props} />
                </div>

                <div className="col-md-2 text-center" style={{ borderTopStyle: 'solid' }}>
                    <button onClick={this.action_curso} className="btn btn-primary btn-md margin-top-20px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action_departamento} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action} className="btn btn-primary btn-md margin-top-80px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action} className="btn btn-primary btn-md margin-top-120px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                </div>

                <div className="col-md-5" style={{ borderLeftStyle: 'solid' }}>
                    <Formulario ref={(props) => this.form = props} />
                </div>
            </div>
        );
    }
}

export default Comparador;