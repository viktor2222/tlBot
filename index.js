require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = process.env

const app = express()

app.use(bodyParser.urlencoded({ extended: true, limit: '1kb' }))
app.use(bodyParser.json({ limit: '1kb' }))

const server = app.listen(PORT, () => {
  console.log(`tlBot is started on ${PORT} port!`)
})

server.setTimeout(300 * 1000)

module.exports = app
