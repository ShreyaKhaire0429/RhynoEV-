const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS, Images)
app.use(express.static('public'));

// Routes to handle requests for each page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/se03-lite.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/se03-lite.html'));
});

app.get('/se03.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/se03.html'));
});

app.get('/se03-max.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/se03-max.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});