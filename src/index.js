const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/db')
const routes = require('./routes')
require('dotenv').config()

const app = express()
db.connect()

app.use(express.json())
app.use(bodyParser.json())
app.use('/api', routes)

app.all('*', (req, res, next) => {
  return res.status(404).json({
    erro: {
      message: 'Rota não encontrada.',
    },
  })
})

app.use((erro, req, res, next) => {
  return res.status(erro.status || 500).json({
    erro: {
      message: 'Erro interno do Servidor.',
    },
  })
})
