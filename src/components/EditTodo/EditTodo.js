import React from 'react';
import {useState, useEffect} from 'react'
import { TodoForm } from '../TodoForm/TodoForm';
import {updateTodo} from '../../services/todoService/todoService';
import {getTodosById} from '../../services/todoService/todoService'

const  EditTodo = (props) => {
    const [todo, setTodo] = useState()
   
    useEffect(() => {
      getTodosById(props.match.params.id)
     .then((results)=> {
      setTodo({
        text: results.title
    })
     })
      }, []);

      const onSubmit = async (data) => {
        console.log(data);
        const Todo = {todoTitle: data.text, todoId: props.match.params.id}
        console.log(Todo)
      await updateTodo(Todo)
      }

      return todo ? (
        <div className="container">
          <div className="mt-3">
            <h3>Edit Task</h3>
            <TodoForm todo={todo} onSubmit={onSubmit}/>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      );
}

export default EditTodo;