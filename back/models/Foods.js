const mongoose = require('mongoose');

const { Schema } = mongoose;

const FoodSchema = new Schema ({
    name: String,
    calories: Number,
    image: String
},
{
    timestamps: true,
});

//primeiro argumento é o nome da collection no mongoose e o segungo o Schema
const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;