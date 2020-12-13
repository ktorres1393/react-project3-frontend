import React from 'react';

import {CreateTodo} from '../components/CreateTodo/CreateTodo';
import TodoList from '../components/TodoList/TodoList';
import Timer from '../components/Timer/Timer'




function Dashboard(props) {
  return (
    <div>
      {/* <div>
        <Link to='/dashboard'>New Task</Link>
      </div> */}
      <Timer />
      <CreateTodo user={props.user}/>
      <TodoList user={props.user}/>
  
    
  </div>
  );
}

export default Dashboard;



