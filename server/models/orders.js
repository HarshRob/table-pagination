const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    sid: {
        type: Number,
        required: true
    },
    orderId: {
        type: Number,
        required: true
    },
    dealId: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Order', orderSchema)