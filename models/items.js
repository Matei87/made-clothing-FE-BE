const mongoose = require('mongoose');

//define Schmema
const Schema = mongoose.Schema;
//create Schema
const itemsSchema = new Schema({
  Women: {
    id: Number,
    title: String,
    items: [
      {
        id: Number,
        color: String,
        name: String,
        image: String,
        price: Number,
        brand: String,
        description: String,
        routeName: String,
      },
    ],
  },
  Men: {
    id: Number,
    title: String,
    items: [
      {
        id: Number,
        color: String,
        name: String,
        image: String,
        price: Number,
        brand: String,
        description: String,
        routeName: String,
      },
    ],
  },
  header: String,
});

const Items = mongoose.model('Items', itemsSchema);
module.exports = Items;
