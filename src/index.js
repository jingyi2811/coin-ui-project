import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './css/global.css';

import Homepage from './homepage';
import Deposit from './deposit';
import Withdraw from './withdraw';

class App extends Component {

    render() {

        return (

            <Router>

              <Switch>

                  <Route exact path='/' component={Homepage} />
                  <Route path='/deposit' component={Deposit} />
                  <Route path='/withdraw' component={Withdraw} />

              </Switch>

            </Router>

         );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
