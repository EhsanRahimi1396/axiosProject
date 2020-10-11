const express = require('express');
const axios = require('axios');


axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5')
console.log(res)
    //.then(result => {
    // res.status(200).json({
    //    message: 'you sent get request'
    // })
    //}).catch(err => {
    //     console.log(err);
    //  res.status(500).json({
    // error: err
    //})

    // })

    .then((res) => {
        //console.log(res.status.code);
        console.log(res.data)
        console.log(res.status);
        response.json({
            message: "you send Get request"
            
        })
    return data ? data.result : null
    })

    .catch((error) => {
        console.error(error)
        response.json(" you accepted error")
        return error ? error.result :null
    })



axios.post('http://jsonplaceholder.typicode.com/todos?_limit=5')
console.log(res)
    //.then(result => {
    //  res.status(200).json({
    // message: 'you sent post request'
    //  })
    //}).catch(err => {
    //  res.status(500).json({
    // error: err
    //  })
    // })
    .then((res) => {
        console.log(res.data)
        console.log(res.status);
        response.json({
            message: ' you send Post request'
        })
        return data ? data.result: null
    })
    .catch((error) => {
        console.log(error)
        response.json({
            message: 'you accepted error'
        })
        return error ? error.result :null
    })

axios.delete('http://jsonplaceholder.typicode.com/todos?_limit=5')
//.then(result => {
// res.status(200).json({
//  message: 'you sent delete request'


// })
// }).catch(err => {
//  res.status(500).json({
// error: err
// })
// })
console.log(res)

    .then((res) => {
        console.log(res.data)
        console.log(res.status);
        response.json({
            message: 'you send delete request'
        })
        return data ?data.result :null
    })
    .catch((error) => {
        console.log(error)
        response.json('you accepted error')
        return error ? error.result :null
    })

axios.put('http://jsonplaceholder.typicode.com/todos?_limit=5')
// .then(result => {
// res.status(200).json({
// message: 'you sent put request'
// })
// }).catch(err => {
//  res.status(500).json({
// error: err
// })
//  })
console.log(res)

    .then((res) => {
        console.log(res.data)
        console.log(res.status);
        response.json({
            message: 'you send put request'
        })
        return data ? data.result :null
    })
    .catch((error) => {
        console.log(error)
        response.json('you accepted error')
            return error ? error.result :null
    })


