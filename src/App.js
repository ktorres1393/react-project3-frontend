import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'
import { getUser, logout } from './services/userService'

import { Route, Switch, withRouter, Redirect } from 'react-router-dom'



function App(props) {

  /**  Component State   */

  const [ userState, setUserState ] = useState({ user: getUser() });

  /*   helper functions   */

  function handleSignupOrLogin (){
    setUserState({ user: getUser()})
    props.history.push('/dashboard');
  }

  function handleLogout(){
    logout()
    setUserState({user: null});
    props.history.push('/')
  }

  return (
    <div className="App">
     
      <Header user={userState.user} handleLogout={handleLogout}/>
      <Switch>
      <Route exact path="/" render={(props) =>
      <HomePage />
      }/>
      <Route exact path="/dashboard" render={(props) =>
      getUser()?
        <Dashboard />
        :
        <Redirect to="/login"/>
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
