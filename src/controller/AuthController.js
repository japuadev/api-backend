const sanitize = require('mongo-sanitize')
const jwt = require('../utils/jwt')
const users = require('../models/users')

module.exports = {
    async login(req, res) {
        try {
            const body = req.body
            const filter = {physic_national: sanitize(body.physic_national), password: sanitize(body.password)}
            const user = await users.findOne(filter)
            if (user) {
                const result = {
                    ...user._doc,
                    token: await jwt.generateTokenPayload({_id: String(user._id)}),
                }
                return res.status(200).json(result)
            } else {
                return res.status(500).json({
                    error: {
                        message: 'Usuário ou senha errada.',
                        error: 'Não foi possível validar o usuário.',
                    },
                })
            }
        } catch (error) {
            return res.status(500).json({
                error: {
                    message: 'Erro ao fazer login.',
                    error: message.error,
                },
            })
        }
    },
}
