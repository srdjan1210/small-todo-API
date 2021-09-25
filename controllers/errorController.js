exports.errorHandler = (err, req, res, next) => {
    console.log(err);

    if(err.operational) {
        return res.status(err.statusCode).json({
            status: 'Failed',
            message: err.message
        });
    }

    return res.status(500).json({
        status: 'Failed',
        message: err.message
    })
}