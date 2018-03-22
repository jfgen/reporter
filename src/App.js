import React, { Component } from 'react';
import logo from './poo.png';
import './App.css';

const location = require('@derhuerst/browser-location');

class App extends Component {
    sendData() {
        location((err, loc) => {
            if (err) console.error(err)
            else console.log(loc)
        })
    }

  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="App-title">Poo Spotter</h1>
        </header>
        <div className="content">
            <p className="app-intro">
               Help keeping your city clean by reporting all crappy findings!
            </p>
            <button className="report-btn" onClick={this.sendData}>Report crap</button>
        </div>
      </div>
    );
  }
}

export default App;
