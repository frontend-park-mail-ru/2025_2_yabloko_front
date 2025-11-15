import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`support server is running on port ${PORT}`)
})
