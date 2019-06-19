import React, { Component } from 'react';
import './Header.scss';
import PokeLogo from '../../assets/pokemonLogo.png';

export default class Header extends Component {
  render() {
    return (
        <header>
          <img src={PokeLogo} alt="Pokemon logo"/>
          <h1>Choose your pokemon</h1>
        </header>
    );
  }
}