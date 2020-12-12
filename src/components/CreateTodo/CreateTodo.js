import React from 'react';

import {TodoForm} from '../TodoForm/TodoForm'

export const CreateTodo = () => {
    

    

    const onSubmit = (data) => {
       alert(JSON.stringify(data));
       
    }

    return(
        <div className="container">
            <h1>Create Todo</h1>
            <TodoForm onSubmit={onSubmit}/>
        </div>
    )
}