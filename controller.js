const Services = require('./services')
module.exports.getinformation = (req, res, next) => {
    try { 
        const response =Services.getTodos
        res.send().json({
            response:{
                status:response.status,
                data:response.data
            }
        })
       // res.send().json({
          //  respons: {
            //    status: res.status,
              //  data: res.data,
            //}
        //})
    }
    catch(err){
        console.log(err)
    }
}



module.exports.postinformation = (req, res, next) => {
    try {
        res.send().json({
            response:{
                status:response.status,
                data:response.data
            }
        })
       // res.send().json({
           // respons: {
              //  status: res.status,
               // data: res.data
           // }
       // })
    }
    catch (err) {
        console.log(err)
    }
}

module.exports.deleteinformation = (req, res, next) => {
    try {
        res.send().json({
            response:{
                status:response.status,
                data:response.data
            }
        })
        //res.send().json({
          //  respons: {
               // status: res.status,
               // data: res.data
           // }
      //  })
    }
    catch (err) {
        console.log(err)
    }
}

module.exports.putinformation = (req, res, next) => {
    try {
        res.send().json({
            response:{
                status:response.status,
                data:response.data
            }
        })
      //  res.send().json({
        //    respons: {
          //      status: res.status,
            //    data: res.data
            //}
        //})

    }
    catch (err) {
        console.log(err)
    }
}



