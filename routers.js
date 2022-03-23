const express = require('express')
const { ObjectId } = require('mongodb')
const router = express.Router()
const connection = require('./connection')

// // middleware that is specific to this router
// router.use((req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// })

//page for index
router.get('/', (req, res) => {
   res.send('Hello World!')
})

//get data from storegg_db
router.get('/users', async (req, res) => {
   try {
      const db = connection.db('storegg_db')
      const users = await db.collection('users').find().toArray()
      res.send({data: users})
   } catch (error) {
      res.send({message: error.message || 'internal server error'})  
   }
})

//insert data into storegg_db
router.post('/users', async (req, res) => {
   try {
      const { name, age, status } = req.body
      const db = connection.db('storegg_db')
      const users = await db.collection('users').insertOne({
         name,
         age,
         status
      });
      // console.log("users >> ")
      // console.log(users)
      if(users.acknowledged){
         res.send({message: 'Successfully added data'})
      }else{
         res.send({message: 'Failed adding data'})
      }
   } catch (error) {
      res.send({message: error.message || 'internal server error'})  
   }
})

//update data into storegg_db
router.put('/users/:id', async (req, res) => {
   try {
      const { id } = req.params
      const { name, age, status } = req.body
      const db = connection.db('storegg_db')
      const users = await db.collection('users').updateOne({ _id: ObjectId(id)}, {
         $set: {
            name,
            age,
            status
         }
      });
      // console.log("users >> ")
      // console.log(users)
      if(users.acknowledged){
         res.send({message: 'Successfully updated data'})
      }else{
         res.send({message: 'Failed updating data'})
      }
   } catch (error) {
      res.send({message: error.message || 'internal server error'})  
   }
})

//delete data from storegg_db
router.delete('/users/:id', async (req, res) => {
   try {
      const { id } = req.params
      const db = connection.db('storegg_db')
      const users = await db.collection('users').deleteOne({ _id: ObjectId(id)});
      if(users.acknowledged){
         res.send({message: 'Successfully deleted data'})
      }else{
         res.send({message: 'Failed deleting data'})
      }
   } catch (error) {
      res.send({message: error.message || 'internal server error'})  
   }
})
 
// // GET method route
// router.get('/', (req, res) => {
//    res.send('GET request to the homepage')
// })

// // POST method route
// router.post('/', (req, res) => {
//    res.send('POST request to the homepage')
// })

// // PUT method route
// router.put('/', function (req, res) {
//    res.send('PUT request to homepage')
// })

// // DELETE method route
// router.delete('/', function (req, res) {
//    res.send('DELETE request to homepage')
// })

// // GET method route with params
// router.get('/users/:id', (req, res) => {
// const id = req.params.id;
// res.send(id)
// })

// // GET method route with query
// router.get('/user', (req, res) => {
//    const name = req.query.name;
//    res.send(name)
// })

module.exports = router