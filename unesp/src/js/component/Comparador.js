import React, { Component } from 'react';
import Formulario from './Formulario';
import '../../css/component/Comparador_style.css';
import { Disciplinas } from '../rest/FormularioRest';
import { Form } from '../rest/FormularioRest';

class Comparador extends Component {

    constructor(props) {
        super(props);

        this.state = {
            disciplinas: [],
            formulario: {},
            myForm:<Formulario />,
            thisForm:<Formulario />,
            codigo: ''
        }

        this.action_curso = this.action_curso.bind(this);
        this.action_departamento = this.action_departamento.bind(this);
        this.change = this.change.bind(this);
        this.buscarFormario = this.buscarFormario.bind(this);
        this.buscarCodigo = this.buscarCodigo.bind(this);
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

    buscarCodigo(event){
        this.setState({codigo:event.target.value});
    }

    buscarFormario(event) {
        Form(this.state.codigo).then(data => this.setState({formulario: data}));
        let formulario = this.state.formulario;
        this.setState({myForm:<Formulario formulario={formulario} />});
        // this.form.setState({codigo: this.state.formulario.codigo});
        // this.form.setState({curso:this.state.formulario.curso});
        // this.form.setState({disciplina:this.state.formulario.disciplina})
        // this.form.setState({anual:this.state.formulario.anual});
        // this.form.setState({semestral: this.state.formulario.semestral });
        // this.form.setState({optativa: this.state.formulario.optativa});
        // this.form.setState({obrigatoria: this.state.formulario.obrigatoria});
        // this.form.setState({creditos:this.state.formulario.creditos});
    }

    change(event) {
        alert(event.target.value);
    }

    disciplinas() {
        Disciplinas().then(data => this.setState({ disciplinas: data }));
    }

    render() {
        let disciplinas = this.state.disciplinas;
        let formulario = this.state.formulario;
        return (
            <div className="row">
                <div style={{ paddingBottom: '120px' }}>
                    <div className="container col-md-4">
                        <form>
                            <div className="form-group" style={{ width: '300px' }}>
                                <label htmlFor="sel1">Disciplina:</label>
                                <select className="form-control" id="sel1" onChange={this.change}>
                                    {disciplinas.map((disciplina, index) => (
                                        <option key={index}>{disciplina}</option>
                                    ))}
                                </select>
                            </div>
                        </form>
                    </div>

                    <div className="container col-md-4">
                        <form>
                            <div className="form-group" style={{ width: '300px' }}>
                                <label htmlFor="sel1">Codigo:</label>
                                <input value={this.state.codigo} onChange={this.buscarCodigo}  
                                 onBlur={this.buscarFormario} className="form-control" id="sel1" />
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
                    {this.state.thisForm}
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
                    {this.state.myForm}
                </div>
            </div>
        );
    }
}

export default Comparador;