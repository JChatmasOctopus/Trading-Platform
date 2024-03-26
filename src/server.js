'use strict';

const express = require('express');

// Constants
//const PORT = process.env.PORT || '8080';
const PORT = process.env.PORT || '8081';
//const HOST = '192.168.0.1';
const HOST = '0.0.0.0';

// App
const app = express();
app.get('*', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
