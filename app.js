// app.js
const express = require('express')
const app = express()
const port = 3000
let requestTime = 0
let responseTime = 0

//request Time======================================================================
app.use((req, res, next) => {
  console.log("req:", getNewTime(req))
  requestTime = new Date().getTime()
  next()
})

app.get('/', (req, res, next) => {
  res.send('列出全部 Todo')
  next()
}, getResponseTime)

app.get('/new', (req, res, next) => {
  res.send('新增 Todo 頁面')
  next()
}, getResponseTime)

app.get('/:id', (req, res, next) => {
  res.send('顯示一筆 Todo')
  next()
}, getResponseTime)

app.post('/', (req, res, next) => {
  res.send('新增一筆  Todo')
  next()
}, getResponseTime)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

// get time function===================================================================
function getNewTime(req) {
  const newDate = new Date()
  let serverLog = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds()
  serverLog += ' | ' + req.method + " from " + "http://localhost:3000" + req.url
  return serverLog
}

function getResponseTime(req, res) {
  responseTime = new Date().getTime()
  console.log("res:", getNewTime(req), "| total time:", responseTime - requestTime, "ms")
}

