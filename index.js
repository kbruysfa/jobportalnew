const express = require('express');
const app = express();
const mongoose=require('mongoose')
const router =require('./routes/user routes.js')
const PORT = 1456;
const bodyparser=require('body-parser')
const cors =require('cors')
mongoose.connect('mongodb+srv://kbru:love1234@job2024.bnxqeyf.mongodb.net/?retryWrites=true&w=majority&appName=job2024').then(
    ()=>{console.log('connected');

}).catch(()=>{console.log('failed')})
app.use(bodyparser.json())
/*
app.use(
  bodyparser.urlencoded({
    extended: true,
  }),
);*/
app.use(bodyparser.urlencoded({ extended: true}));
app.use(express.json())
app.use('/user', router)
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {
  console.log(`Server is listening at port :${PORT}`);
});