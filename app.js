// app.js
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  // add time , URL and method
  const newDate = new Date()
  let serverLog = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds()
  serverLog += ' | ' + req.method + " from " + "http://localhost:3000" + req.url
  console.log(serverLog)
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})