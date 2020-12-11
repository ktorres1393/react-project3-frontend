import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom'
import {TodoList} from '../components/TodoList/TodoList';
import {CreateTodo} from '../components/CreateTodo/CreateTodo';
import {EditTodo} from '../components/EditTodo/EditTodo'


function Dashboard() {
  return (
    <div>
      <div>
        <Link to='/dashboard'>New Task</Link>
      </div>
      <CreateTodo history={useHistory}/>
  <Switch>
    <Route exact path='/dashboard' component={TodoList} />
    <Route exact path='/dashboard/edit/:id' component={EditTodo} />
    
  </Switch>
    
  </div>
  );
}

export default Dashboard;



