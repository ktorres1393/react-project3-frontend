import React from 'react';
import {useHistory} from 'react-router-dom'

import {TodoForm} from '../TodoForm/TodoForm'
import {createTodo} from '../../services/todoService/todoService'

export const CreateTodo = () => {
    const history = useHistory()
    
    const onSubmit = async (data) => {
      await createTodo(data)
      history.push("/dashboard")
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