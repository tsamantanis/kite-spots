const mongoose = require('mongoose');
const router = require('express').Router();
const { body, query, validationResult } = require('express-validator');
const User = mongoose.model('User');
const Marker = mongoose.model('Marker');

const auth = require('./auth');

router.get('/', function(req, res) {
    Marker.find().then(function (markers) {
        return res.status(201).json({ markers: markers });
    })
});

router.get('/get', [
    query('id').not().isEmpty()
], function(req, res) {
    Marker.findById(req.query.id).then(async function (marker) {
        return res.status(201).json({ marker: marker });
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

        let marker = new Marker();
        marker.lat = req.body.lat;
        marker.lng = req.body.lng;
        marker.save().then(function(marker) {
            res.json({
                message: "Marker created successfully!",
                marker: marker
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
