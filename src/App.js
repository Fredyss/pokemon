import React, { Component } from 'react';
import Header from './components/Header/Header';
import Pokedex from './components/Pokedex/Pokedex';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Pokedex />
      </div>
    );
  }
}