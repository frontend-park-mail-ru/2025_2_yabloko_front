'use strict'

const express = require('express')
const path = require('path')

const app = express()

app.use('/static', express.static(path.join(__dirname, '..', 'public')))
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')))
const DIST_DIR = path.join(__dirname, '..', 'public')

app.get('/*', (_, res) => {
	res.sendFile(path.join(DIST_DIR, 'index.html'))
})

const PORT = 3001
app.listen(PORT)
console.log('support server is running on port 3001')
