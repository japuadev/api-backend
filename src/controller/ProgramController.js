const Program = require('../models/program')

module.exports = {
    async create(req, res) {
        try {
            const body = req.body
            const program = await Program.create(body)
            return res.status(201).json(program)
        } catch (error) {
            return res.status(500).json({
                error: {
                    message: 'Erro ao criar Programa.',
                    error: error.message,
                },
            })
        }
    },

    async update(req, res) {
        try {
            const {id} = req.params
            const body = req.body
            const program = await Program.findByIdAndUpdate(id, body, {new: true})

            if (!program.body) {
                return res.status(400).json({
                    error: {
                        message: 'Necessário passar os campos com as informações a serem atualizadas.',
                    },
                })
            }

            if (program.body) {
                return res.status(200).json(program)
            } else {
                return res.status(404).json({
                    error: {
                        message: 'Programa não encontrado.',
                        error: `Não foi possivel encontrar o Programa com o id ${id}.`,
                    },
                })
            }
        } catch (error) {
            return res.status(500).json({
                error: {
                    message: 'Erro ao atualizar Programa.',
                    error: error.message,
                },
            })
        }
    },

    async delete(req, res) {
        try {
            const {id} = req.params
            const program = await Program.findByIdAndDelete(id)
            if (program) {
                return res.status(204).json({})
            } else {
                return res.status(404).json({
                    error: {
                        message: 'Programa não encontrado.',
                        error: `Não foi possivel encontrar o Programa com o id ${id}.`,
                    },
                })
            }
        } catch (error) {
            return res.status(500).json({
                error: {
                    message: 'Erro ao deletar o Programa.',
                    error: error.message,
                },
            })
        }
    },

    async getById(req, res) {
        try {
            const {id} = req.params
            const program = await Program.findById(id)
            if (program) {
                return res.status(200).json(program)
            } else {
                return res.status(404).json({
                    error: {
                        messege: 'Programa não existe',
                        error: `Não foi possivel encontrar o Programa com o id ${id}`,
                    },
                })
            }
        } catch (error) {
            return res.status(500).json({
                error: {
                    message: 'Erro ao deletar o Programa.',
                    error: error.message,
                },
            })
        }
    },
}
