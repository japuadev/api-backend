const Users = require('../models/users')
const validator = require('email-validator')
const {cpfIsValid, setEmptyToNull} = require('../utils/commons')
const mongoose = require('mongoose')

module.exports = {
    async create(req, res) {
        try {
            let body = setEmptyToNull(req.body)
            let usersCpf = body.physic_national
            let emailExists = body.email

            if (emailExists) {
                if (!validator.validate(body.email)) {
                    return res.status(401).json({
                        error: {
                            message: 'E-mail inválido.',
                        },
                    })
                }
            } else {
                return res.status(400).json({
                    error: {
                        message: 'E-mail é obrigado para realizar login.',
                    },
                })
            }

            if (usersCpf) {
                if (!cpfIsValid(usersCpf)) {
                    let response = {message: 'Número de CPF inválido.'}
                    return res.status(400).send(response)
                }
            }

            const users = await Users.create(body)
            return res.status(201).json(users)
        } catch (error) {
            return res.status(500).json({
                error: {
                    message: 'Erro ao criar usuário.',
                    error: error.message,
                },
            })
        }
    },

    async update(req, res) {
        try {
            const {id} = req.params
            const body = req.body
            const users = await Users.findByIdAndUpdate(id, body, {new: true})

            if (!users.body) {
                return res.status(400).json({
                    error: {
                        message: 'Necessário passar os campos com as informações a serem atualizadas.',
                    },
                })
            }
            if (users.body) {
                return res.status(200).json(users)
            } else {
                return res.status(404).json({
                    error: {
                        message: 'Usuário não encontrado.',
                        error: `Não foi possivel encontrar o usuário com o id ${id}.`,
                    },
                })
            }
        } catch (error) {
            return res.status(500).json({
                error: {
                    message: 'Erro ao atualizar usuário.',
                    error: error.message,
                },
            })
        }
    },

    async delete(req, res) {
        try {
            const {id} = req.params
            const users = await Users.findByIdAndDelete(id)
            if (users) {
                return res.status(204).json({
                    message: `Usuário deletado com sucesso ${users.email}`,
                })
            } else {
                return res.status(404).json({
                    error: {
                        message: 'Usuário não encontrado.',
                        error: `Não foi possivel encontrar o usuário com o id ${id}.`,
                    },
                })
            }
        } catch (error) {
            return res.status(500).json({
                error: {
                    message: 'Erro ao deletar o usuário.',
                    error: error.message,
                },
            })
        }
    },

    async getById(req, res) {
        try {
            const {id} = req.params
            const users = await Users.findById((id), 'name company active grant')
            if (!users) {
                return res.status(404).json({
                    error: {
                        messege: 'Usuário não encontrado ou não existe.',
                        error: `Não foi possivel encontrar o usuário com o id ${id}`,
                    },
                })
            }

            return res.status(200).json(users)
            
        } catch (error) {
            return res.status(500).json({
                error: {
                    message: 'Erro ao buscar o usuário.',
                    error: error.message,
                },
            })
        }
    },
}
