const Services = require('./services')

module.exports.getinformation = (req, res, next) => {
     res.send().json({
        respons: {
            status: res.status,
            data: res.data,
        }
    })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })
      
 
}

module.exports.postinformation = (req, res, next) => {
    res.send().json({
        respons: {
            status: res.status,
            data: res.data,
        }
    })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })
}

module.exports.deleteinformation = (req, res, next) => {
     res.send().json({
        respons: {
            status: res.status,
            data: res.data,
        }
    })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })

}

module.exports.putinformation = (req, res, next) => {
     res.send().json({
        respons: {
            status: res.status,
            data: res.data,
        }
    })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })
}


