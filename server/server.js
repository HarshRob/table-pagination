const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Order = require('./models/orders')
const Deal = require('./models/deals')

mongoose.connect('mongodb://localhost/orders', {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/orders', paginatedResults(Order), (req, res) => {
    res.json(res.paginatedResults)
})

app.get('/deals', paginatedResults(Deal), (req, res) => {
    res.json(res.paginatedResults)
})

function paginatedResults(model) {
    return async(req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}

    if (endIndex < await model.countDocuments().exec()) {
        results.next = {
            page: page + 1,
            limit: limit
        }
    }

    if (startIndex > 0){
        results.previous = {
            page: page - 1,
            limit: limit
        }
    }
    try {
        results.results = await model.find().limit(limit).skip(startIndex).exec()
        res.paginatedResults = results
    } catch (e) {
        res.status(500).json({ message: e.message })
    }

    res.paginatedResults = results
    next()
    }
}

app.listen(3000)