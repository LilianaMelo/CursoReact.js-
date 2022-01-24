import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import './index.css';

ReactDOM.render( // componentes que queremos renderisar
  //<App saludo="Buenas, Holi" />,
  <App />,
  document.getElementById('root') // renderizar el root
);