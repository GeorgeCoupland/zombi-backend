
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const sightingSchema = new Schema({
  owner: { type: objectId, ref: 'User' },
  location: { 
    type: { 
      type: String,
      default: 'Point'
    }, 
    coordinates: [Number] 
  },
  size: Number,
  type: String
});

sightingSchema.index({ location: '2dsphere' });

const Sighting = mongoose.model("Sighting", sightingSchema);

module.exports = Sighting;