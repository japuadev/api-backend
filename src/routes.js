const {Router} = require('express')

const PatientController = require('./controller/PatientController')
const ProgramController = require('./controller/ProgramController')
const UsersController = require('./controller/UsersController')
const AuthController = require('./controller/AuthController')
const Auth = require('./middlewares/auth')
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

//Rotas de Usuários
routes.post('/users', UsersController.create)
routes.get('/users/:id', UsersController.getById)
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.delete)

//Rotas de Autenticação
routes.post('/login', AuthController.login)

module.exports = routes
