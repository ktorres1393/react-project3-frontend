
const BASE_URL = 'http://localhost:3001/api/todos'


function getTodos(userId) {
    return fetch(BASE_URL + `/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json'
        },
       
    }).then(response => {
        if(response.ok) return response.json();
        // throw new Error('Bad Credentials');
    })

}

 function createTodo(todo) {
    return fetch(BASE_URL + '/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
       body: JSON.stringify(todo)
       
    })

   

}

function updateTodo(todo){
    console.log(todo)
    return fetch(BASE_URL + '/edit', {
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json'
        },
       body: JSON.stringify(todo)
       
    })
}

function getTodosById(todoId) {
    return fetch(BASE_URL + `/id/${todoId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json'
        },
       
    }).then(response => {
        if(response.ok) return response.json();
        // throw new Error('Bad Credentials');
    })

}

function deleteTodo(todo){
    console.log(todo)
    return fetch(BASE_URL + '/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'Application/json'
        },
       body: JSON.stringify(todo)
       
    })
}



// copy the same thing as getTodos, change name to saveTodos, POST method, include body: JSON.stringify(user) , make sure that function takes in title and userId, base url /save



export {
    getTodos,
    createTodo,
    updateTodo,
    getTodosById,
    deleteTodo
} 
    
