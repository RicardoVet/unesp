import React, {Component} from 'react';


class Hello extends Component{

    teste(){
        return 'ola ';
    }

    message = 'ola todos ';

    render(){
        return(
        <p> {this.message}Mundo Ricardo</p>
        );
    }
}

export default Hello;