const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// to get MONGODB_URL variable from the .env file
dotenv.config();

// import items route
const items = require('./routes/items');


// initialize our express application
const app = express();
app.use(cors());


//connect to database 
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('Mongoose is connected'));


//parse everything that is comming into JSON or DATA PARSING
app.use(express.json());
// for extended/deep JSON objects
app.use(express.urlencoded({ extended: false }));


//use routes
app.use('/items', items);

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

//define the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is starting at port ${PORT}`))