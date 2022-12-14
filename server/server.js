const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '..', '/build');
const port = window.__RUNTIME_CONFIG__.PORT || 3030;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
