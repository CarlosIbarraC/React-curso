import React from 'react';
import ReactDome from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp'




const divRoot = document.querySelector('#root');
//console.log(divRoot);

ReactDome.render(<CounterApp  />,divRoot);

