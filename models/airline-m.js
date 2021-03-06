const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String, 
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
     },
     arrival: {
        type: String,
     }
},
{
    timestamps: true
  });

const airSchema = new Schema({
    airport: {
        type: String, 
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
     },
    title:  {
        type: String,
        required: true
        },
    departDate: {
        type: String,
        default: function() {
            return new Date().getFullYear() + 1
        },
        }, 
    flightNum: {
        type: Number,
        default: function(){
            return Math.floor(Math.random() * 10000)
        }
    },
    arrive: [destinationSchema],
    ticket: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
    }],
    price: {
        type: Number,
        default:  function(){
            return Math.floor(Math.random() * 300)
        }
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Airline', airSchema);