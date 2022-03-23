// const mongoose = require('mongoose')

// const CounterSchema = new mongoose.Schema({
//     _id: {type: String, default: 1, required: true},
//     seq: {type: Number, default: 0},
// })

// const counter = mongoose.model('counter', CounterSchema)

// const autoIncrementModelID = function (model, doc, next) {
//     counter.findByIdAndUpdate(model, {$inc: { seq: 1} }, {new: true, upsert: true})
//     .then(function(count) {
//         doc.id = JSON.stringify(count).seq;
//         next()
//     })
//     .catch(function(error) {
//         console.error("Erro ao cadastrar Id.", error)
//         throw error;
//     })
// }

// //Aplicar dentro das models que é necessário fazer o autoincrement
// ModelSchema.pre('save', function (next) {
//     if (this.isNew) {
//         next()
//         return
//     }

//     autoIncrementModelID('counters_models', this, next)
// })

// module.exports = autoIncrementModelID;
