const express = require('express');
const axios = require('axios');
async function getTodos() {

    try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5')
        console.log(response);
        return response;
    }
    catch (err) {
        console.log(err)
    }
}


async function postTodos() {
   try {
        const response = await axios.post('/user',{
        userName: 'Fred',
        userEmail: 'Flintstone@gmail.com'
    });
        return response;
    }
    catch (err) {
        console.log(err)
    }
}


async function putTodos() {
    try {
        const response = await axios.put('http://jsonplaceholder.typicode.com/todos?_limit=5')
        console.log(response);
        return response;
    }
    catch (err) {
        console.log(err)
    }
}

 
async function deleteTodos(){
    try {
        const response =await axios.delete('http://jsonplaceholder.typicode.com/todos?_limit=5')
        console.log(response);
        return response;
    }
    catch(err){
        console.log(err)
    }
}
module.exports ={
    getTodos,postTodos,putTodos,deleteTodos
}

