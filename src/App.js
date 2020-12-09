import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'
import { getUser } from './services/userService'

import { Route, Switch, withRouter } from 'react-router-dom'



function App(props) {

  /**  Component State   */

  const [ userState, setUserState ] = useState({ user: getUser() });

  /*   helper functions   */

  function handleSignupOrLogin (){
    setUserState({ user: getUser()})
    props.history.push('/dashboard');
  }

  return (
    <div className="App">
     
      <Header />
      <Switch>
      <Route exact path="/" render={(props) =>
      <HomePage />
      }/>
      <Route exact path="/dashboard" render={(props) =>
      <Dashboard />
      }/>
      <Route exact path="/login" render={(props) =>
      <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
      }/>
      <Route exact path="/signup" render={(props) =>
      <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
      }/>
      
      </Switch>
      <Footer />
        
    </div>
  );
}

export default withRouter(App);
