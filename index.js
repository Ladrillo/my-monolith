const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/api/users', (req, res) => {
  res.json({ success: true })
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/index.html'))
});

app.listen(process.env.PORT || 4000, () => {
  console.log('listening');
});
