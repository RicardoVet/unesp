import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { saveAll } from '../rest/FormularioRest';

class Formulario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curso: this.props.curso,
            departamento: this.props.departamento,
            codigo: this.props.codigo,
            disciplina: this.props.disciplina,
            seriacao: this.props.seriacao,
            anual: this.props.anual,
            semestral: this.props.semestral,
            obrigatoria: false,
            optativa: false,
            requisitos: this.props.requisitos,
            creditos: this.props.creditos,
            carga: this.props.carga,
            numeroDeAlunos: this.props.numero_de_alunos,
            aulas_teoricas: this.props.aulas_teoricas,
            aulas_praticas: this.props.aulas_praticas,
            aulas_teorico_praticas: this.props.aulas_teorico_praticas,
            outras: this.props.outras,
            objetivos: this.props.objetivos,
            conteudo: this.props.conteudo
        };

        this.change_curso = this.change_curso.bind(this);
        this.change_departamento = this.change_departamento.bind(this);
        this.change_codigo = this.change_codigo.bind(this);
        this.change_disciplina = this.change_disciplina.bind(this);
        this.change_seriacao = this.change_seriacao.bind(this);
        this.change_anual = this.change_anual.bind(this);
        this.change_semestral = this.change_semestral.bind(this);
        this.change_obrigatoria = this.change_obrigatoria.bind(this);
        this.change_optativa = this.change_optativa.bind(this);
        this.change_requisitos = this.change_requisitos.bind(this);
        this.change_creditos = this.change_creditos.bind(this);
        this.change_carga = this.change_carga.bind(this);
        this.change_numero_de_alunos = this.change_numero_de_alunos.bind(this);
        this.save_action = this.save_action.bind(this);
    }

    change_curso(event) {
        this.setState({ curso: event.target.value });
    }

    change_departamento(event) {
        this.setState({ departamento: event.target.value });
    }

    change_codigo(event) {
        this.setState({ codigo: event.target.value });
    }

    change_disciplina(event) {
        this.setState({ disciplina: event.target.value });
    }

    change_seriacao(event) {
        this.setState({ seriacao: event.target.value });
    }

    change_anual(event) {
        if (this.state.semestral === this.state.anual) {
            this.setState({ anual: !this.state.anual });
        } else {
            this.setState({ anual: !this.state.anual });
            this.setState({ semestral: !this.state.anual });
        }
    }

    change_obrigatoria(event) {
        if (this.state.optativa === this.state.obrigatoria) {
            this.setState({ obrigatoria: !this.state.obrigatoria });
        } else {
            this.setState({ obrigatoria: !this.state.obrigatoria });
            this.setState({ optativa: !this.state.obrigatoria });
        }
    }

    change_optativa(event) {
        if (this.state.optativa === this.state.obrigatoria) {
            this.setState({ optativa: !this.state.optativa });
        } else {
            this.setState({ optativa: !this.state.optativa });
            this.setState({ obrigatoria: !this.state.optativa });
        }
    }

    change_semestral(event) {
        if (this.state.semestral === this.state.anual) {
            this.setState({ semestral: !this.state.semestral });
        } else {
            this.setState({ anual: !this.state.semestral });
            this.setState({ semestral: !this.state.semestral });
        }
    }

    change_numero_de_alunos(event) {
        this.setState({ numeroDeAlunos: event.target.value });
    }

    change_requisitos(event) {
        this.setState({ requisitos: this.state.requisitos });
    }

    change_creditos(event) {
        this.setState({ creditos: this.state.creditos });
    }

    change_carga(event) {
        this.setState({ carga: this.state.carga });
    }

    save_action(event) {
        saveAll(this.state).then(response => response.data);

    }
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="cur">Curso:</label>
                    <input type="text" value={this.state.curso} onChange={this.change_curso} className="form-control" id="cur" />
                </div>
                <div className="form-group">
                    <label htmlFor="dep">Departamento:</label>
                    <input type="text" value={this.state.departamento} onChange={this.change_departamento} className="form-control" id="dep" />
                </div>
                <div className="form-group">
                    <label htmlFor="cod">Código:</label>
                    <input type="text" value={this.state.codigo} onChange={this.change_codigo} className="form-control" id="cod" />
                </div>
                <div className="form-group">
                    <label htmlFor="dis">Disciplina:</label>
                    <input type="text" value={this.state.disciplina} onChange={this.change_disciplina} className="form-control" id="dis" />
                </div>
                <div className="form-group">
                    <label htmlFor="ser">Seriação Ideal:</label>
                    <input type="text" value={this.state.seriacao} onChange={this.change_seriacao} className="form-control" id="ser" />
                </div>
                <div className="row ml-10">
                    <div className="form-group col-md-4 center">
                        <label htmlFor="ser">Anual/Sem:</label>
                        <div className="form-check mt-10">
                            <label className="form-check-label">
                                <input type="radio" value={this.state.anual} onChange={this.change_anual} className="form-check-input" name="optradio" />Anual
                        </label>
                            <label className="form-check-label ml-10">
                                <input type="radio" value={this.state.semestral} onChange={this.change_semestral} className="form-check-input" name="optradio" />Semestral
                        </label>
                        </div>
                    </div>
                    <div className="form-group col-md-8 center" >
                        <label htmlFor="Obr">Obrigatória/Optativa:</label>
                        <div className="form-check mt-10">
                            <label className="form-check-label">
                                <input type="radio" value={this.state.obrigatoria} onChange={this.change_obrigatoria} className="form-check-input" name="opt" />Obrigatória
                        </label>
                            <label className="form-check-label ml-10">
                                <input type="radio" value={this.state.optativa} onChange={this.change_optativa} className="form-check-input" name="opt" />Optativa
                        </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="req">Pré e Co-Requisito:</label>
                    <input type="text" className="form-control" id="req" />
                </div>
                <div className="form-group">
                    <label htmlFor="cre">Créditos:</label>
                    <input type="number" className="form-control" id="cre" />
                </div>
                <div className="form-group">
                    <label htmlFor="car">Carga Horária Total:</label>
                    <input type="number" className="form-control" id="car" />
                </div>
                <div className="form-group">
                    <label htmlFor="num">Número Máximo de Alunos:</label>
                    <input type="number" min={this.props.numero_de_alunos} max={this.props.numero_de_alunos + 50} defaultValue={this.state.numero_de_alunos} onChange={this.change_numero_de_alunos} className="form-control" id="num" />
                </div>
                <div className="form-group">
                    <label htmlFor="teo">Aulas Teóricas:</label>
                    <input type="number" className="form-control" id="teo" />
                </div>
                <div className="form-group">
                    <label htmlFor="pra">Aulas Práticas:</label>
                    <input type="number" className="form-control" id="pra" />
                </div>
                <div className="form-group">
                    <label htmlFor="aul">Aulas Teorico-Praticas:</label>
                    <input type="number" className="form-control" id="aul" />
                </div>
                <div className="form-group">
                    <label htmlFor="out">Outras:</label>
                    <input type="text" className="form-control" id="out" />
                </div>
                <div className="col-md-12" style={{ padding: '0px' }}>
                    <div className="form-group col-md-9" style={{ padding: '0px' }}>
                        <label htmlFor="obj">Objetivos:</label>
                        <textarea className="form-control"
                            placeholder="Ao Termino da disciplina o aluno devera ser capaz de"
                            rows="5" id="obj"></textarea>
                    </div>
                    <div className="col-md-3" style={{ marginTop: '25px' }}>
                        <button type="button" className="btn btn-success btn-sm"
                            data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-edit"></span></button>
                        <div id="myModal" className="modal fade" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title" style={{textAlign:'center'}}>Comentário</h4>
                                    </div>
                                    <div className="modal-body">
                                        <textarea style={{width:'100%', height:'200px', resize:'none'}}></textarea>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Fechar</button>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal">Salvar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="obj">Conteúdo Programático:</label>
                    <textarea className="form-control" rows="10" id="obj"></textarea>
                </div>
                <div style={{ margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }} className="row">
                    <div className="col-md-3">
                        <button type="button" className="btn btn-default center"
                            aria-label="Left Align" onClick={this.save_action}>
                            <span className="glyphicon glyphicon-save" aria-hidden="true"></span>Salvar
                        </button>
                    </div>
                    <div className="col-md-9" style={{ textAlign: "right" }}>
                        <button type="button" className="btn btn-default center" aria-label="Left Align">
                            <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>Limpar
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

Formulario.propTypes = {
    curso: PropTypes.string,
    departamento: PropTypes.string,
    codigo: PropTypes.string,
    disciplina: PropTypes.string,
    seriacao: PropTypes.string,
    semestral: PropTypes.bool,
    anual: PropTypes.bool,
    obrigatoria: PropTypes.bool,
    optativa: PropTypes.bool,
    requisitos: PropTypes.string,
    creditos: PropTypes.number,
    carga: PropTypes.number,
    numero_de_alunos: PropTypes.number,
    aulas_teoricas: PropTypes.number,
    aulas_praticas: PropTypes.number,
    aulas_teorico_praticas: PropTypes.number,
    outras: PropTypes.string,
    objetivos: PropTypes.string,
    conteudo: PropTypes.string

};

Formulario.defaultProps = {
    curso: '',
    departamento: '',
    codigo: '',
    disciplina: '',
    seriacao: '',
    anual: false,
    semestral: false,
    optativa: false,
    obrigatoria: false,
    requisitos: '',
    creditos: 0,
    carga: 0,
    numero_de_alunos: 0,
    aulas_teoricas: 0,
    aulas_praticas: 0,
    aulas_teorico_praticas: 0,
    outras: '',
    objetivos: '',
    conteudo: ''
};

export default Formulario;