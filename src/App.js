import React from 'react';
import _ from 'lodash';
import './App.css';

const location = require('@derhuerst/browser-location');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'idle'
        }

        this.sendData = this.sendData.bind(this);
    }

    sendData() {
        location((err, loc)=> {
            if(err) {
                throw err;
            }
            const API_URL = 'https://shiftfaroapp-api.herokuapp.com';
            const pooBody = {
                "numberOfPoos": 1000,
                "latlng": [loc.longitude, loc.latitude],
                "pooIndicator": _.random(0,10),
                "date": ''
            };
            const init = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                mode: 'CORS',
                body: JSON.stringify(pooBody)
            };

            fetch(`${API_URL}/api/databaseFiles`, init)
                .then(() => {
                    this.setState({status: 'success'});
                })
                .catch(function (err) {console.log(err)})
        });
    };

  render() {
    return (
      <div className="app">

        <div className="content">
            <h1 className="title">Help your city!</h1>
            {this.state.status !== 'success'
                ?
                    <div>
                        <p className="app-intro">
                        Help keeping your city clean by reporting all crappy findings!
                        </p>
                        <button className="report-btn" onClick={this.sendData}>Report crap</button>
                    </div>
                :
                    <div className="success-area">
                        <p className="app-intro">
                            Thanks for your input, you first class citizen you ;)
                        </p>

                    </div>

            }

        </div>
      </div>
    );
  }
}

export default App;
