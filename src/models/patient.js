const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    _id: {
        type: ObjectId,
        defaultValue: true,
        primaryKey: key,
        unique: [true]
    }
})

module.exports = mongoose.model('patient', patientSchema)