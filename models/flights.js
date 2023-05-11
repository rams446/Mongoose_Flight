const {Schema , model} = require("mongoose")
const flightSchema = new Schema(
{
airline : {type:String, enum:['American', 'Southwest','United'] },
flightNo: {type: Number, minimum:10 , maximum:9999 },
departs : {type: Date , default: Date.now()
},
destination : [{
    type: Schema.Types.ObjectId,
    ref:'Destination'
}],

airport : {type:String, enum:['AUS', 'DAL', 'LAX', 'SAN' ,'SEA'] , default:'SAN' },
});

const Flight = model('Flight', flightSchema);
module.exports = Flight
