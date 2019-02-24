const express = require('express')
const app = express()
const port = 3000

const jobs = require('./parse-jobs-html').jobs

app.get('/jobs', (req, res) => {
    res.send(jobs)
})

app.listen(port)
