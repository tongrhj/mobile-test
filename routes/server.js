const express = require('express')
const app = express()
var path = require('path')

// app.use(express.static(__dirname + '/public'))
app.use(express.static('public'))

app.listen(3000)
