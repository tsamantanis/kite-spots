const mongoose = require('mongoose');

const MarkerSchema = mongoose.Schema({
    lat: {type: Number}, required: [true, "can't be blank"]}, // round to 2 decimal places to approximate 1km
    lng: {type: Number}, required: [true, "can't be blank"]} // round to 2 decimal places to approximate 1km
}, {timestamps: true});

mongoose.model('Marker', MarkerSchema);
