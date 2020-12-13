import React from 'react';
import {useHistory} from 'react-router-dom'

import {TodoForm} from '../TodoForm/TodoForm'
import {createTodo} from '../../services/todoService/todoService'

export const CreateTodo = (props) => {
    const history = useHistory()
    
    const onSubmit = async (data) => {
        console.log(data);
        const Todo = {title: data.text, userId: props.user._id}
        console.log(Todo)
      await createTodo(Todo)
      window.location.reload(false)
    //   history.push("/dashboard")
    };
  
    return (
      <div className="container">
        <div className="mt-3">
          <h3>Create Todo Item</h3>
          <TodoForm onSubmit={onSubmit} />
        </div>
      </div>
    );
  };

//