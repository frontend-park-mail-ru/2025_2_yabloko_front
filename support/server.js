const express = require('express')
const app = express()

// Добавь middleware для CORS и iframe
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
	res.setHeader('X-Frame-Options', 'ALLOWALL') // ← ВАЖНО!
	next()
})

app.get('/', (req, res) => {
	const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Поддержка</title>
    <style>
        body { margin: 0; padding: 20px; font-family: Arial; background: white; }
    </style>
</head>
<body>
    <h1>🛟 Поддержка работает!</h1>
    <button onclick="alert('Ура!')">Тест</button>
</body>
</html>
  `
	res.send(html)
})

app.listen(3001, '0.0.0.0', () => {
	console.log('Support server running on port 3001')
})
