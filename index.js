
const express = require('express');
const app = express();
const mongoose=require('mongoose')
const PORT = 9991;
const bodyparser=require('body-parser')
const cors =require('cors')
const cookiparser=require('cookie parser')
mongoose.connect('mongodb+srv://kbru:truelove@job2024.bnxqeyf.mongodb.net/?retryWrites=true&w=majority&appName=job2024').then(
    ()=>{console.log('connected');

}).catch(()=>{console.log('failed')})
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {
  console.log(`Server is listening at port :${PORT}`);
});