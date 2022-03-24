const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/storegg_db');
}

// const userSchema = new mongoose.Schema({
//    // name: String,
//    name: {
//       type: String,
//       // required: true
//       required: [true, 'name is required']
//    },
//    age: Number,
//    status: {
//       type: String,
//       enum: ['active', 'non active'],
//       default: 'non active'
//    }
// });
// const User = mongoose.model('User', userSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', async () => {
db.once('open', () => {
   //we'are connected
   console.log('database connected');
   //show all data from users
   // const users = await User.find();
   // console.log(users);

   //show specific data from users
   // const users = await User.find({ _id: '623a83cc8e93af2154fa35ce'});
   // console.log(users);

   //insert new user
   // const newUser = await User.create({
   //    name: 'Ginting',
   //    age: 22,
   //    status: 'active'
   // })
   // console.log(newUser);

   //another method to insert user
   // const newUser = new User();
   // newUser.name = 'Kevin';
   // newUser.age = 23;
   // newUser.status = 'non active';
   // const insert = await newUser.save();
   // console.log(insert); 

   //update data
   // const updateUser = await User.updateOne({_id: '623a9b74872d430284bde64e'}, {name: 'Marcus'});
   // console.log(updateUser);

   //update data
   // const updateUser = await User.findById('623a9b74872d430284bde64e');
   // updateUser.name = 'Lee Ji Zia';
   // const update = await updateUser.save();
   // console.log(update);

   //delete data
   // const deleteUser = await User.deleteOne({_id: '623a9b74872d430284bde64e'})
   // console.log(deleteUser);

   //insert empty data
   // const newUser = await User.create({});
   // console.log(newUser);   
})