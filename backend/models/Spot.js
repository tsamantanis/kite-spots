const mongoose = require('mongoose');

const SpotSchema = mongoose.Schema({
    name: {type: String, required: [true, "can't be blank"]},
    location: {type: mongoose.Schema.Types.ObjectId, unique: true, required: [true, "can't be blank"], index: true},
    bestMonths: [{type: String, required: [true, "can't be blank"]}],
    windStregth: {type: String},
    windDirection: {type: String},
    gusty: {type: Boolean},
    water: [{type: String}],
    otherActivities: [{type: String}],
}, {timestamps: true});

mongoose.model('Spot', SpotSchema);
