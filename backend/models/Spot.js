const mongoose = require('mongoose');

const SpotSchema = mongoose.Schema({
    name: {type: String, required: [true, "can't be blank"]},
    location: {type: mongoose.Schema.Types.ObjectId, unique: true, required: [true, "can't be blank"], index: true},
    bestFor: {type: String, required: [true, "can't be blank"]},
    bestMonths: [{type: String, required: [true, "can't be blank"]}],
    windSpeed: {type: Number},
    windDirections: [{type: String}],
    gusty: {type: Boolean},
    water: [{type: String}],
    otherActivities: [{type: String}],
}, {timestamps: true});

mongoose.model('Spot', SpotSchema);
