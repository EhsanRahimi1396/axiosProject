const Services = require('./services')

module.exports.getinformation = (req, res, next) => {
    res.status(200).json({
        message: 'GET INFORMATION'

    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}

module.exports.postinformation = (req, res, next) => {
    res.status(200).json({
        message: 'POST INFORMATION'
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}

module.exports.deleteinformation = (req, res, next) => {
    res.status(200).json({
        message: 'Delete information'
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}

module.exports.putinformation = (req, res, next) => {
    res.status(200).json({
        message: 'PUT information'
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}


