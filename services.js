const express = require('express');
const router = express.Router();
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
    })

    .catch((error) => {
        console.error(error)
        response.json(" you accepted error")
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
    })
    .catch((error) => {
        console.log(error)
        response.json({
            message: 'you accepted error'
        })
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
    })
    .catch((error) => {
        console.log(error)
        response.json('you accepted error')
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
    })
    .catch((error) => {
        console.log(error)
        response.json('you accepted error')
    })


