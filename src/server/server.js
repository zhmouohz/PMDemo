const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const config = require('config')
const logger = require('./logger')('server')
var getRawBody = require('raw-body')

const app = express()
const httpServer = http.Server(app)
const io = socketIo(httpServer)

app.post(config.get('path.ACCEPTMESSAGE'), (req, res) => {
  getRawBody(
    req,
    {
      length: req.headers['content-length'],
      encoding: req.charset,
    },
    function(err, string) {
      if (err) {
        res.status(500).end()
      } else {
        console.log(string)
        io.emit('msg', JSON.parse(string))
        res.status(201).end()
      }
    }
  )
})
app.get('/test', (req, res) => {
  res.send({ code: 'SUCCESS' })
})

io.of('client').on('connection', socket => {
  logger.info('connect', socket)
})

httpServer.listen(3000, err => {
  if (err) {
    logger.error(err)
  } else {
    logger.info('started')
  }
})
