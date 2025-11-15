'use strict'

const express = require('express')
const path = require('path')

const app = express()

const __dirname = path.dirname(__filename)

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const PORT = 3001
app.listen(PORT, () => {
	console.log('support server is running on port 3001')
})
