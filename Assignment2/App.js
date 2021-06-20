import React, { Component } from 'react';
import Display from './Display'
import './MyApp.css';
  

class App extends Component {
  render() {

    return (
      <div className="App">
      <div className="chikna"> <h3>Taareekh : 14/Farvari/2019 Valentine Enjoyewa Kariye</h3></div>
      <h1 className="heading"> Apna App Sabka App </h1>
      <p> ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      <Display  name="Manthan" age="20" birthmonth="June"/>
      <Display name="Baandar" age="420" birthmonth="Terwa"/>

      </div>
    );
  }
}

export default App;