const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));
/* MOCK UP API */

app.get('/tours', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(
    JSON.stringify({
      name: 'Leo'
    })
  );
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server up and running in port', PORT);
});
