const express = require('express')
const app = express()
const port = 1000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})
  
// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

// PUT method route
app.put('/', function (req, res) {
  res.send('PUT request to homepage')
})

// DELETE method route
app.delete('/', function (req, res) {
  res.send('DELETE request to homepage')
})

// GET method route with params
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  res.send(id)
})

// GET method route with query
app.get('/user', (req, res) => {
  const name = req.query.name;
  res.send(name)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})