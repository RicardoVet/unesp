import React, { Component } from 'react';

class Periodo extends Component {

    render() {
        return (
            <div class="container">
                <h2>Periodos</h2>
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#integral">Integral</a></li>
                    <li><a data-toggle="tab" href="#noturno">Noturno</a></li>
                </ul>

                <div class="tab-content">
                    <div id="integral" class="tab-pane fade in active">
                        <h3>Integral</h3>
                        <p>Conteúdo a ser discutido.</p>
                    </div>
                    <div id="noturno" class="tab-pane fade">
                        <h3>Noturno</h3>
                        <p>Conteúdo a ser discutido.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Periodo