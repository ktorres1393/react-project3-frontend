
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


// copy the same thing as getTodos, change name to saveTodos, POST method, include body: JSON.stringify(user) , make sure that function takes in title and userId, base url /save



export default getTodos
