const express = require('express')
const app = express()
const sports = require('./sports.json')


app.use(express.json())

//Liste de tous les sports
app.get('/sports', (req,res) => {
    res.status(200).json(sports)
})

//Lecture d'un sport
app.get('/sports/:id_sport', (req,res) => {
    const id = req.params.id_sport
    const sport = sports.find(sports => sports.id_sport === id)
    res.status(200).json(sport)
})

//Lecture des épreuves d'un sport
app.get('/sports/:id_sport/epreuves', (req,res) => {
    const id = req.params.id_sport
    const sport = sports.find(sports => sports.id_sport === id)
    res.status(200).json(sport.epreuves)
})

//Lecture d'une épreuve
app.get('/sports/:id_sport/epreuves/:id_epreuve', (req,res) => {
    const id_sport = req.params.id_sport
    const id_epreuve = req.params.id_epreuve
    const sport = sports.find(sports => sports.id_sport === id_sport)
    const epreuves = sport.epreuves
    const epreuve = epreuves.find(epreuves => epreuves.id_epreuve === id_epreuve)
    res.status(200).json(epreuve)
})






//Nouveau sport
app.post('/sports', (req,res) => {
    sports.push(req.body)
    res.status(200).json(sports)
})

//Nouvelle épreuve
app.post('/sports/:id_sport/epreuves', (req,res) => {
    const id_sport = req.params.id_sport
    const sport = sports.find(sports => sports.id_sport === id_sport)
    const epreuves = sport.epreuves
    epreuves.push(req.body)
    res.status(200).json(epreuves)
})

//Nouveau résultat
app.post('/sports/:id_sport/epreuves/:id_epreuve/resultats', (req,res) => {
    const id_sport = req.params.id_sport
    const id_epreuve = req.params.id_epreuve
    const sport = sports.find(sports => sports.id_sport === id_sport)
    const epreuves = sport.epreuves
    const epreuve = epreuves.find(epreuves => epreuves.id_epreuve === id_epreuve)
    const resultats = epreuve.resultats
    resultats.push(req.body)
    res.status(200).json(resultats)
})





//Modification d'une épreuve
app.patch('/sports/:id_sport/epreuves/:id_epreuve', (req,res) => {
    const id_sport = req.params.id_sport
    const id_epreuve = req.params.id_epreuve
    const sport = sports.find(sports => sports.id_sport === id_sport)
    const epreuves = sport.epreuves
    const epreuve = epreuves.find(epreuves => epreuves.id_epreuve === id_epreuve)
    epreuve.lieu = req.body.lieu,
    epreuve.date = req.body.date,
    epreuve.horaire = req.body.horaire,
    res.status(200).json(epreuve)
})






//suppression d'un sport
app.delete('/sports/:id_sport', (req,res) => {
    const id = req.params.id_sport
    let sport = sports.find(sport => sport.id_sport === id)
    sports.splice(sports.indexOf(sport),1)
    res.status(200).json(sports)
})

//suppression d'une épreuve
app.delete('/sports/:id_sport/epreuves/:id_epreuve', (req,res) => {
    const id_sport = req.params.id_sport
    const id_epreuve = req.params.id_epreuve
    const sport = sports.find(sports => sports.id_sport === id_sport)
    const epreuves = sport.epreuves
    let epreuve = epreuves.find(epreuve => epreuve.id_epreuve === id_epreuve)
    epreuves.splice(epreuves.indexOf(epreuve),1)
    res.status(200).json(epreuves)
})

//suppression d'un résultat
app.delete('/sports/:id_sport/epreuves/:id_epreuve/resultats/:id_resultat', (req,res) => {
    const id_sport = req.params.id_sport
    const id_epreuve = req.params.id_epreuve
    const id_resultat = req.params.id_resultat
    const sport = sports.find(sports => sports.id_sport === id_sport)
    const epreuves = sport.epreuves
    const epreuve = epreuves.find(epreuves => epreuves.id_epreuve === id_epreuve)
    const resultats = epreuve.resultats
    let resultat = resultats.find(resultat => resultat.id_resultat === id_resultat)
    resultats.splice(resultats.indexOf(resultat),1)
    res.status(200).json(resultats)
})





app.listen(8080, () => {})