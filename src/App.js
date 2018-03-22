import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

const location = require('@derhuerst/browser-location');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            coords: {latitude: null, longitude: null}
        };

        this.sendData = this.sendData.bind(this);
    }

    sendData() {
        location((err, loc) => {
            if (err) console.error(err);
            else {
                this.setState({coords: {latitude: loc.latitude, longitude: loc.longitude}});
            }
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
