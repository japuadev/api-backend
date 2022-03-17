const {Router} = require('express')

const PatientController = require('./controller/PatientController')
const ProgramController = require('./controller/ProgramController')
const routes = Router()

//Rotas de Paciente
routes.post('/patients', PatientController.create)
routes.get('/patients/:id', PatientController.getById)
routes.put('/patients/:id', PatientController.update)
routes.delete('/patients/:id', PatientController.delete)

//Rotas de Programa
routes.post('/programs', ProgramController.create)
routes.get('/programs/:id', ProgramController.getById)
routes.put('/programs/:id', ProgramController.update)
routes.delete('/programs/:id', ProgramController.delete)

module.exports = routes
