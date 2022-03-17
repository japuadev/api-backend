const mongoose = require('mongoose')

const ProgramSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: [true],
        unique: [true],
    },
    number: {
        type: Number,
        index: {unique: true},
        comment: 'Número sequencial do programa.',
    },
    active: {
        type: Boolean,
        default: true,
        comment: 'Campo para indicar se o programa está ativo.',
    },
    name: {
        type: String,
        required: [true, 'O nome do Programa deve ser inserido.'],
        unique: [true, 'O nome desse Programa já está cadastrado.'],
        comment: 'Nome do Programa.',
    },
    describe: {
        type: String,
        required: [true, 'Deve ser adicionada uma descrição para o Programa.'],
        comment: 'Descrição do Programa.',
    },
    age_group_initial: {
        type: Number,
        required: [true, 'O campo da Faixa Etária Inicial deve ser preenchido.'],
        comment: 'Campo de Faixa Etária Inicial do programa.',
    },
    age_group_final: {
        type: Number,
        default: 200,
    },
    created_at: {
        type: Date,
        timestamps: {
            createdAt: 'Criado em',
        },
        comment: 'Data de criação do Programa.',
    },
    update_at: {
        type: Date,
        timestamps: {
            updateAt: 'Atualizado em',
        },
        comment: 'Data da última atualização do Programa.',
    },
    date_inative: {
        type: Date,
        comment: 'Campo de data da inativação do cadastro.',
    },
    disabled: {
        type: Boolean,
        default: [false],
        comment: 'Campo para confirmar se Programa está desativado.',
    },
})

module.exports = mongoose.model('program', ProgramSchema)
