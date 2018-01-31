import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/Mui'
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <MuiThemeProvider>
  <MyAwesomeReactComponent />
  </MuiThemeProvider>
);
ReactDOM.render(
  <App />
  document.getElementById('app')
);

export default App;
