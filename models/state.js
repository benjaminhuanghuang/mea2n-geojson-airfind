const mongoose = require('mongoose');

const stateSchema = mongoose.Schema({
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

const State = module.exports = mongoose.model('State', stateSchema);

// Get airports
module.exports.getStates= (callback, limit) => {
    State.find(callback).limit(limit);
}

