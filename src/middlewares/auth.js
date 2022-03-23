const jwt = require('jsonwebtoken')

module.exports = {
    async verifyJWT(req, res, next) {
        const token = req.headers['authorization']?.split(' ')[1]
        if (!token)
            return res.status(401).json({
                auth: false,
                error: {
                    messege: 'Sem autenticação',
                    error: 'Sem autenticação',
                },
            })

        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err)
                return res.status(401).json({
                    auth: false,
                    error: {
                        messege: 'Falha na autenticação do token',
                        error: err.message,
                    },
                })

            const payload = decoded.payload

            req.userId = payload._id
            next()
        })
    },
}
