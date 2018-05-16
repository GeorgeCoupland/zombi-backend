const express = require('express');
const router = express.Router();
const Sighting = require('../models/sighting');


// GET to get all the sightings

router.get('/all', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }
  Sighting.find()
  .then((result) => {
    const data = {
      places: result
    }
    res.json(data);
  });

});

// POST for creating a new Sighting
router.post('/', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({ code: 'unauthorized' });
  }

  const type = req.body.type;
  const size = Number(req.body.size);
  const coordinates = req.body.coordinates // <- this is an array [lat, lng]
  const owner = req.session.currentUser._id;

  if (!type || !size || !coordinates || !owner) {
    return res.status(422).json({ code: 'validation' });
  }

  const newData = {
    type,
    size,
    location: { coordinates },
    owner
  }

  const newSighting = new Sighting(newData);

  newSighting.save()
  .then((result) => {
    res.json({code: 'ok'});
  })
  .catch(next);

});

module.exports = router;
