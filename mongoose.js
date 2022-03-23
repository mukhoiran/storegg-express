// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/storegg_db');
}

const carSchema = new mongoose.Schema({
   name: String
});

const Car = mongoose.model('Car', carSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (){
   //we'are connected
   const car = new Car({ name: 'Ferarri'});
   car.save((err, result) => {
      if(err) return console.log(err);
      console.log(result);
   })
})