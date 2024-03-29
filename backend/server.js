const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

require('./models/User');
require('./models/Marker');
require('./models/Spot');
require('./config/passport');

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: ['http://localhost:5000', 'http://localhost:8100', 'https://kite-spots.netlify.app', 'https://kite-spots.netlify.app/'],
    credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('morgan')('dev'));

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'MongoDB database connection failed'));

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});


app.use(require('./routes'));
