const express = require('express');
const router = express.Router();
const Sighting = require('../models/sighting');


// GET for get all the sighting


// POST for create a new Sighting
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
