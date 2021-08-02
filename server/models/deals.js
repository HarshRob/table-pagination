const mongoose = require('mongoose')


const dealSchema = new mongoose.Schema({
    dealId: {
        type: Number,
        required: true
    },
    dealStatus: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    primaryCategory: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shipping: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Deal', dealSchema)