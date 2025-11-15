const express = require('express')
const path = require('path')
const app = express()

app.get('/*', (req, res) => {
	const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Поддержка</title>
    <style>
        body { margin: 0; padding: 20px; font-family: Arial; }
    </style>
</head>
<body>
    <h1>🛟 Поддержка работает!</h1>
    <button onclick="alert('Тест')">Нажми меня</button>
</body>
</html>
  `
	res.send(html)
})

app.listen(3001, '0.0.0.0', () => {
	console.log('Support server running on port 3001')
})
