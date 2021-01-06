const mongoose = require('mongoose');
const router = require('express').Router();
const { body, query, validationResult } = require('express-validator');
const User = mongoose.model('User');
const Spot = mongoose.model('Spot');

const auth = require('./auth');

router.get('/', function(req, res) {
    Spot.find().then(function (spots) {
        return res.status(201).json({ spots: spots });
    })
});

router.get('/get', [
    query('id').not().isEmpty()
], function(req, res) {
    Spot.findById(req.query.id).then(async function (spot) {
        return res.status(201).json({ spot: spot });
    })
});

router.post('/new', [
    auth.required
], function (req, res) {
    User.findById(req.payload.id).then(async function(user) {
        if (!user) { return res.sendStatus(401); }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        let spot = new Spot();
        spot.name = req.body.spot.name;
        spot.location = mongoose.Types.ObjectId(req.body.spot.location);
        // ^ Execute /new route for marker and return id
        spot.bestMonths = req.body.spot.bestMonths;
        spot.wind = req.body.spot.wind;
        spot.water = req.body.spot.water;
        spot.otherActivities = req.body.spot.otherActivities;
        spot.save().then(function(spot) {
            res.json({
                message: "Spot created successfully!",
                spot: spot
            })
        }).catch(err => {
            console.log(err),
            res.status(500).json({
                error: err
            });
        });
    });
});

module.exports = router;
