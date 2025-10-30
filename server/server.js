'use strict'

const express = require('express')
const path = require('path')

const app = express()

app.use('/static', express.static(path.join(__dirname, '..', 'dist')))
const DIST_DIR = path.join(__dirname, '..', 'dist')

app.get('/{*any}', (_, res) => {
	res.sendFile(path.join(DIST_DIR, 'index.html'))
})

const PORT = 3000
app.listen(PORT)
console.log('server is running on port 3000')
