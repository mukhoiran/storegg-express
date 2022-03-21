const express = require('express')
const routers = require('./routers')
const app = express()
const port = 1000

app.use(routers)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})