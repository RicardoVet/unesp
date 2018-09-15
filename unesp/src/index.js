import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './Routers';
import registerServiceWorker from './registerServiceWorker';
import Header from './js/component/Header';
import Footer from './js/component/Footer';

ReactDOM.render([<Header key="1"/>, <Routers key="2"/>, <Footer key="3" /> ], document.getElementById('root'));
registerServiceWorker();
