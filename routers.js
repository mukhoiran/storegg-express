const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', (req, res) => {
   res.send('Hello World!')
 })
 
// GET method route
router.get('/', (req, res) => {
   res.send('GET request to the homepage')
})

// POST method route
router.post('/', (req, res) => {
   res.send('POST request to the homepage')
})

// PUT method route
router.put('/', function (req, res) {
   res.send('PUT request to homepage')
})

// DELETE method route
router.delete('/', function (req, res) {
   res.send('DELETE request to homepage')
})

// GET method route with params
router.get('/users/:id', (req, res) => {
const id = req.params.id;
res.send(id)
})

// GET method route with query
router.get('/user', (req, res) => {
   const name = req.query.name;
   res.send(name)
})

module.exports = router