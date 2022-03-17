const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: true,
        unique: [true, 'O campo de _id deve ser único.'],
    },
    number: {
        type: Number,
        index: {unique: true},
        comment: 'Número sequencial do paciente.',
    },
    active: {
        type: Boolean,
        default: true,
        comment: 'Campo para saber se paciente está ativo.',
    },
    student: {
        type: Boolean,
        comment: 'Campo para saber se paciente é estudante.',
    },
    educational_attainment: {
        type: String,
        enum: {
            values: [
                'Não Alfabetizado',
                'Fund. Incompleto',
                'Fund. Completo',
                'Med. Incompleto',
                'Med. Completo',
                'Tec. Incompleto',
                'Tec. Completo',
                'Sup. Incompleto',
                'Sup. Completo',
            ],
            message: '{VALUE} não é suportado.',
        },
        comment: 'Escolaridade.',
    },
    monthly_income: {
        type: Number,
        enum: {
            values: ['1', '1-3', '4+'],
            message: '{VALUE} não é suportado.',
        },
        comment: 'Renda Mensal.',
    },
    physic_national: {
        type: String,
        required: [true, 'O campo CPF deve ser preenchido.'],
        unique: [true, 'Esse CPF já está cadastrado.'],
        validate: {
            validator: function (v) {
                return /^[0-9]{2,3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/.test(v)
            },
            message: (props) => `${props.value} não é um número de cpf reconhecido.`,
        },
        comment: 'CPF.',
    },
    ident_national: {
        type: String,
        required: [true, 'O campo RG deve ser preenchido.'],
        unique: [true, 'Esse RG já está cadastrado.'],
        comment: 'Identidade.',
    },
    issuing_body: {
        type: String,
        required: [true, 'O campo Órgão Emissor deve ser preenchido.'],
        comment: 'Órgão Emissor.',
    },
    name: {
        type: String,
        required: [true, 'O campo Nome deve ser preenchido.'],
        comment: 'Nome do paciente.',
    },
    social_name: {
        type: String,
        required: [false, 'O campo Nome Social deve ser preenchido caso solicitado pelo paciente.'],
        comment: 'Nome Social do paciente.',
    },
    birth_date: {
        type: Date,
        required: [true, 'O campo Data de Nascimento deve ser preenchido.'],
        comment: 'Data de Nascimento.',
    },
    gender: {
        type: String,
        enum: {
            values: ['Masculino', 'Feminino', 'Não-Binário', 'Homem-Trans', 'Mulher Trans', 'Outro'],
            message: '{VALUE} não é suportado.',
        },
    },
    pregnant: {
        type: Boolean,
        default: false,
        required: [true, 'O campo de Gravidez deve ser preenchido.'],
        comment: 'Gravidez.',
    },
    sus_card: {
        type: String,
        comment: 'Número do Cartão do Sus.',
    },
    type_blood: {
        type: String,
        enum: {
            values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'RH null'],
            message: '{VALUE} não é suportado.',
        },
        comment: 'Tipo sanguíneo do pacient.',
    },
    organ_donor: {
        type: Boolean,
        comment: 'Campo para informar se paciente é Doador de Órgãos.',
    },
    profession: {
        type: String,
        comment: 'Profissão do paciente.',
    },
    dad_name: {
        type: String,
        comment: 'Nome do pai.',
    },
    mother_name: {
        type: String,
        comment: 'Nome da mãe.',
    },
    spouse_name: {
        type: String,
        comment: 'Nome do Cônjuge.',
    },
    ethnicity: {
        type: String,
        enum: {
            values: ['Negro', 'Indígena', 'Branco', 'Pardo', 'Amarelo', 'Outro'],
            message: '{VALUE} não suportado.',
        },
        comment: 'Étnia do paciente.',
    },
    nationality: {
        type: String,
        comment: 'Nacionalidade.',
    },
    naturality: {
        type: String,
        comment: 'Naturalidade.',
    },
    marital_status: {
        type: String,
        enum: {
            values: ['Solteiro', 'Casado', 'Separado', 'Viúvo'],
            message: '{VALUE} não é suportado.',
        },
        comment: 'Estado Cívil.',
    },
    vip: {
        type: Boolean,
        default: false,
        comment: 'Campo para saber se paciente é vip.',
    },
    created_at: {
        type: Date,
        timestamps: {
            createdAt: 'Criado em',
        },
        comment: 'Data de criação do Cadastro.',
    },
    update_at: {
        type: Date,
        timestamps: {
            updateAt: 'Atualizado em',
        },
        comment: 'Data da última atualização do Cadastro.',
    },
    date_inative: {
        type: Date,
        comment: 'Campo de data da inativação do cadastro.',
    },
    date_create_manual: {
        type: Date,
        comment: 'Data da criação do cadastro manualmente.',
    },
    disabled: {
        type: Boolean,
        default: [false],
        comment: 'Campo para confirmar se paciente está desativado.',
    },
    program: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'program',
        comment: 'Programas que o paciente está inserido.',
    },
})

module.exports = mongoose.model('patient', PatientSchema)
