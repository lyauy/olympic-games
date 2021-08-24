const express = require('express')
const app = express()
const sports = require('./sports.json')


app.use(express.json())

//Liste de tous les sports
app.get('/sports', (req,res) => {
    res.status(200).json(sports)
})

//Lecture d'un sport
app.get('/sports/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const sport = sports.find(sports => sports.id === id)
    res.status(200).json(sport)
})

//Nouveau sport
app.post('/sports', (req,res) => {
    sports.push(req.body)
    res.status(200).json(sports)
})

//Modification d'un sport
app.patch('/sports/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let sport = sports.find(sport => sport.id === id)
    sport.epreuve = req.body.epreuve,
    sport.lieu = req.body.lieu,
    sport.date = req.body.date,
    sport.horaire = req.body.horaire,
    res.status(200).json(sport)
})

//suppression d'un sport
app.delete('/sports/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let sport = sports.find(parking => parking.id === id)
    sports.splice(sports.indexOf(sport),1)
    res.status(200).json(sports)
})

app.listen(8080, () => {})