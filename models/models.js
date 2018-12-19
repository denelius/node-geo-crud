var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var JsonSchema = new Schema({
    name: String,
    type: Schema.Types.Mixed
});

var DataSchema = new Schema({
  name: { type: String, required: true },
  geometry: { type: { type: String }, coordinates: [Number] }
});

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

var CitySchema = new Schema({
  type: String,
  name: String,
  style: {
    color: String,
    weight: Number,
    opacity: Number
  },
  geometry: {
    type: {
      type: String,
      enum: ['LineString'],
      required: true
    },
    coordinates: {
      type: Array,
      index: '2d'
    }
  },
  properties: {
    direction: String,
    source: String,
    sink: String,
    level: String,
    sink2: String,
    power: Number
  }
});




// //WORKS ************************
// var CitySchema   = new Schema({
//   name: String,
//   geo: {
//     type: [Number],
//     index: '2d'
//   }
// });
// // {
// // 	"geo":  [-122.2,33.3]
// // }
// //WORKS ************************

//WORKS ************************
var oCitySchema   = new Schema({
  name: String,
  coordinates: {
    type: Array,
    index: '2d'
  }
});
// {
// 	"geo":  [-122.2,33.3]
// }
//WORKS ************************


  // "geometry": {
  //       "type": "LineString",
  //       "coordinates": [
  //           [
  //               -72.591079,
  //               -38.739105
  //           ],
  //           [
  //               -73.2404,
  //               -39.815547
  //           ]
  //       ]
  //   },

  //   "name": "Cityline",
  //   "type": "LineString",
  //   "geo": [
  //       [
  //               -72.591079,
  //               -38.739105
  //           ],
  //           [
  //               -73.2404,
  //               -39.815547
  //           ]
  //   ]

const oldcitySchema = new mongoose.Schema({
  name: String,
  location: {
    type: pointSchema,
    required: true
  }
});

var ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});

// Export the model
//module.exports = mongoose.model('Product', ProductSchema);

// Mongoose Model definition
module.exports = mongoose.model('JString', CitySchema, 'line_collection');