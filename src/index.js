import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import 'antd/dist/antd.css';
import ConfirmEmail from './pages/ConfirmEmail';
import Signin from './pages/Signin';
import Signup1 from './pages/Register/Signup1';
import Signup2 from './pages/Register/Signup2';

ReactDOM.render(
  <React.StrictMode>
   {/* {!localStorage.length? */}
   <Router>
    <Route exact path="/" component={Login}/>
    <Route exact path="/login" component={Signin}/>
    <Route exact path="/confirmemail" component={ConfirmEmail}/>
    <Route exact path="/signup1" component={Signup1}/>
    <Route exact path="/signup2" component={Signup2}/>
  <Route path="/home" component={Dashboard}/>
    <Redirect path="*" to="/"/>
{/*   
  </Router>:
  <Router>
  <Route path="/home" component={Dashboard}/>
  <Redirect path="*" to="/home"/> */}

  </Router>
  }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
