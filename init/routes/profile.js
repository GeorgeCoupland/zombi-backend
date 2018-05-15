const express = require('express');
const router = express.Router();
const User = require('../models/user'); 

/* GET users listing. */
router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ code: 'not-found' });
      }
      return res.json(user);
    })
    .catch(next);
});

module.exports = router;
