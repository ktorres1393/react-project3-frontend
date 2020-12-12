import React from 'react';

import {CreateTodo} from '../components/CreateTodo/CreateTodo';
import TodoList from '../components/TodoList/TodoList';




function Dashboard(props) {
  return (
    <div>
      {/* <div>
        <Link to='/dashboard'>New Task</Link>
      </div> */}
      <CreateTodo />
      <TodoList user={props.user}/>
  
    
  </div>
  );
}

export default Dashboard;



