exports.login = (request, response, next) => {
    response.status(200).json({
        status: 'success',
        message: "SIema",
    })
}

exports.signup = (request, response, next) => {
    response.status(200).json({
        status: 'success',
        message: "SIema",
    })
}

exports.getUser = (request, response, next) => {

    const {
        userId
    } = request.params

    console.log(userId)

    response.status(200).json({
        status: 'success',
        message: "SIema",
    })
}