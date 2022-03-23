const express = require('express')
const routers = require('./routers')
const app = express()
const port = 1000

//Middleware
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
app.use(myLogger)

//Middleware for get value of POST with json body
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(routers)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})