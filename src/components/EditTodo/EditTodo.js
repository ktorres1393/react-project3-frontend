import React from 'react';
import {useState, useEffect} from 'react'
import { TodoForm } from '../TodoForm/TodoForm';

const  EditTodo = () => {
    const [todo, setTodo] = useState()
   
    useEffect(() => {
        setTodo({
            text: "yes"
        })
      }, []);

      const onSubmit = (data) => {
          alert(JSON.stringify(data))
      }

      return todo ? (
        <div className="container">
          <div className="mt-3">
            <h3>Edit Todo Item</h3>
            <TodoForm todo={todo} onSubmit={onSubmit}/>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      );
}

export default EditTodo;