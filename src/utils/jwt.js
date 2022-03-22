const jwt = require('jsonwebtoken')

module.exports = {
    async generateTokenPayload(payload, expires = process.env.EXPIRATION_TIME) {
        const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: Number(expires),
        })
        return token
    },
}
