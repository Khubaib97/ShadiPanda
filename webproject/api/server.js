const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const userRoute = require('./user.route');
const venueRoute = require('./cat.route');
const bookRoute = require('./book.route');
const adminRoute = require('./venue.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
mongoose.set('useCreateIndex', true);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/venue', venueRoute);
app.use('/book', bookRoute);
app.use('/panel', adminRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});