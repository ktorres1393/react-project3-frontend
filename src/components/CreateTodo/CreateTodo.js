import React from 'react';
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

export const CreateTodo = () => {
    const {register, handleSubmit} = useForm()

    const history = useHistory()

    const onSubmit = handleSubmit((data) => {
       alert(JSON.stringify(data));
       history.push('/dashboard') 
    })

    return(
        <div className="container">
            <h1>Create Todo</h1>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Text : </label>
                <input className="form-control" ref={register} type="text" name="text" id="text"/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Create Task</button>
            </div>
            </form>
        </div>
    )
}