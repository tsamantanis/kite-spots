const mongoose = require('mongoose');

const SpotSchema = mongoose.Schema({
    location: {type: mongoose.Schema.Types.ObjectId, unique: true, required: [true, "can't be blank"], index: true},
    bestMonths: [{type: String, required: [true, "can't be blank"]}],
    wind: {type: String},
    water: {type: String},
    otherActivities: [{type: String}],
}, {timestamps: true});

mongoose.model('Spot', SpotSchema);
