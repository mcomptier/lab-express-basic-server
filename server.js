const express = require('express')
const articles = require("./data/articles.json")
const projects = require("./data/projects.json")
const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Welcome Ironhacker. :) with nodemon</h1>')
})

app.get('/api/projects', (_, response) => {
  response.json(projects)
})

app.get('/api/articles', (_, response) => {
  response.json(articles)
})


app.listen(3000, () => console.log('My first app listening on port 3000!'))