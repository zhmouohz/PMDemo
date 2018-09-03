const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const config = require('config')
const logger = require('./logger')('server')
const moment = require('moment')

const app = express()
const httpServer = http.Server(app)
const io = socketIo(httpServer)

//todo 检查错误率
const checkErrRate = info => {
  if (info) return false
  return false
}

app.get(config.get('path.ACCEPTMESSAGE'), (req, res) => {
  io.emit('msg', req.query)
  if (checkErrRate) io.emit('errRateMsg', { dateTime: moment().format('YYYY-MM-DD HH:mm:ss') })
  res.status(201).end()
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
