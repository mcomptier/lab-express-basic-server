const express = require('express')
const articles = require("./data/articles.json")
const projects = require("./data/projects.json")
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/home.html")
})

app.get('/blog', (req, res) => {
  res.sendFile(__dirname + "/views/blog.html")
})

app.get('/api/projects', (_, response) => {
  response.json(projects)
})

app.get('/api/articles', (_, response) => {
  response.json(articles)
})

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html")
})


app.listen(3000, () => console.log('My first app listening on port 3000!'))