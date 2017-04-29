const mongoose = require('mongoose');

State = require('./state');

const airportSchema = mongoose.Schema({
    loc: {
        type: {
            type: String,
        },
        coordinated: {
            type: Array
        }
    },
    name: {
        type: String
    },
    code: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Airport = module.exports = mongoose.model('Airport', airportSchema);

// Get airports
module.exports.getAirports = (callback, limit) => {
    Airport.find(callback).limit(limit);
}

// Get airports by state
module.exports.getAirportsByState = (stateCode, callback, limit) => {
    const query = {
        loc: {
            $geoWithin: {
                $geometry: state.loc
            }
        }
    };
    const projection = {
        name: 1,
        type: 1,
        code: 1,
        _id: 0
    };
    State.findOne({
        code: stateCode
    }, (err, state) => {
        Airport.find(query, projection, callback).limit(limit).sort([
            ['name', 'ascending']
        ]);
    });
    Customer.findById(id, callback);
}
