import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Todo from './Todo' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Foo from './Compo'
import FbNav from './fbnav'
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Todo/> */}
    <FbNav/>
    <Foo/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
