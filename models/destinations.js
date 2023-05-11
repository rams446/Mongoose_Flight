const { Schema, model } = require('mongoose');

const destinationSchema = new Schema({
    airport : {type:String, enum:['AUS', 'DAL', 'LAX', 'SAN' ,'SEA'] },
    arrival : {type: Date},
});

module.exports = model('Destination', destinationSchema);