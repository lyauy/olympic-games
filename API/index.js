const express = require('express')
const app = express()
const sports = require('./sports.json')

app.get('/sports', (req,res) => {
    res.status(200).json(sports)
})

app.get('/sports/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const sport = sports.find(parking => parking.id === id)
    res.status(200).json(sport)
})

app.listen(8080, () => {})