const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/NodeJS-Angular-ExpressJS-Heroku-ExampleApp'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/NodeJS-Angular-ExpressJS-Heroku-ExampleApp/index.html'));
});
app.listen(process.env.PORT || 8080);
console.log('http://localhost:8080/');
