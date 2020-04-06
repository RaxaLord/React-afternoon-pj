import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Section />
      </div>
    );
  }
}
