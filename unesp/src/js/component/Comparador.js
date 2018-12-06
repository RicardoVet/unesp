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
            formulario:{},
            codigo: ''
        }

        this.action_curso = this.action_curso.bind(this);
        this.action_departamento = this.action_departamento.bind(this);
        this.action_codigo = this.action_codigo.bind(this);
        this.action_disciplina = this.action_disciplina.bind(this);
        this.action_seriacao = this.action_seriacao.bind(this);
        this.action_anual_semestral = this.action_anual_semestral.bind(this);
        this.action_pre_requisito = this.action_pre_requisito.bind(this);
        this.action_creditos = this.action_creditos.bind(this);
        this.action_carga = this.action_carga.bind(this);
        this.action_numero_de_alunos = this.action_numero_de_alunos.bind(this);
        this.action_aulas_teoricas = this.action_aulas_teoricas.bind(this);
        this.action_aulas_praticas = this.action_aulas_praticas.bind(this);
        this.action_aulas_teorico_praticas = this.action_aulas_teorico_praticas.bind(this);
        this.action_outras = this.action_outras.bind(this);
        this.action_objetivos = this.action_objetivos.bind(this);
        this.change = this.change.bind(this);
        this.action_conteudo = this.action_conteudo.bind(this);
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

    action_anual_semestral(event) {
        this.editForm.setState({ anual: this.form.state.anual });
        this.editForm.setState({ semestral: this.form.state.semestral });
        this.editForm.setState({ obrigatoria: this.form.state.obrigatoria });
        this.editForm.setState({ optativa: this.form.state.optativa });
    }

    action_pre_requisito(event) {
        this.editForm.setState({requisitos:this.form.state.requisitos});
    }

    action_creditos(event) {
        this.editForm.setState({creditos: this.form.state.creditos});
    }

    action_carga(event) {
        this.editForm.setState({carga: this.form.state.carga});
    }

    action_numero_de_alunos(event) {
        this.editForm.setState({numeroDeAlunos : this.form.state.numeroDeAlunos});
    }

    action_aulas_teoricas(event) {
        this.editForm.setState({aulasTeoricas: this.form.state.aulasTeoricas})
    }

    action_aulas_praticas(event) {
        this.editForm.setState({aulasPraticas: this.form.state.aulasPraticas});
    }

    action_aulas_teorico_praticas(event) {
        this.editForm.setState({aulasTeoricoPraticas: this.form.state.aulasTeoricoPraticas});
    }

    action_outras(event) {
        this.editForm.setState({outras: this.form.state.outras});
    }

    action_objetivos(event) {
        this.editForm.setState({objetivos: this.form.state.objetivos});
    }

    action_conteudo(event) {
        this.editForm.setState({conteudo: this.form.state.conteudo});
    }

    buscarCodigo(event){
        this.setState({codigo:event.target.value});
        if(event.target.value!==''){
            Form(event.target.value).then(data => this.setState({formulario: data}));
        }
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
                                <input value={this.state.codigo} onKeyUp={this.buscarCodigo}  />
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
                    <Formulario ref={(component) => { this.editForm = component; }}/>
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
                    <button onClick={this.action_codigo} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action_disciplina} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action_seriacao} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action_anual_semestral} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action_pre_requisito} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action_creditos} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action_carga} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action_numero_de_alunos} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action_aulas_teoricas} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action_aulas_praticas} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action_aulas_teorico_praticas} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action_outras} className="btn btn-primary btn-md margin-top-40px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action_objetivos} className="btn btn-primary btn-md margin-top-80px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                    <br />
                    <button onClick={this.action_conteudo} className="btn btn-primary btn-md margin-top-120px">
                        <span className="glyphicon glyphicon-arrow-left"></span>
                    </button>
                </div>

                <div className="col-md-5" style={{ borderLeftStyle: 'solid' }}>
                    <Formulario formulario={formulario} ref={(component) => { this.form = component; }}/>
                </div>
            </div>
        );
    }
}

export default Comparador;