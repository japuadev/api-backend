const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        defaultValue: true,
        unique: [true]
    },

})

module.exports = mongoose.model('patient', patientSchema)