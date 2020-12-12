import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import getTodos from '../../services/todoService/todoService'


 const TodoList = (props) => {
  const [items, setItems] = useState([])

 useEffect(() => {
     getTodos(props.user._id)
     .then((results)=> {
        setItems(results)
     })
        
    }, [])

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Todo List</h3> 
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(todo => (
                <tr key={todo._id}>
                  <td>
                    {todo.title}
                  </td>
                  <td>
                    <Link to={`dashboard/edit/${todo._id}`}>Edit</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

   export default TodoList;