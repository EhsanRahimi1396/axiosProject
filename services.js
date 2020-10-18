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
module.exports = {
    getTodos
}

async function postTodos() {
    try {
        const response = await axios.post('http://jsonplaceholder.typicode.com/todos?_limit=5')
        console.log(response);
        return response;
    }
    catch (err) {
        console.log(err)
    }
}
module.exports = {
    postTodos
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
module.exports = {
    putTodos
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
module.exports={
    deleteTodos
}


