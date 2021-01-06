const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

require('./models/User');
require('./models/Marker');
require('./config/passport');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});


app.use(require('./routes'));
