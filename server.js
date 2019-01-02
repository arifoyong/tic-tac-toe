require('dotenv').config();

const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();

console.log(process.env);
console.log(path.join(__dirname, 'build'));
console.log(path.join(__dirname, 'build', 'index.html'));

// serve static asset normally
app.use(express.static(path.join(__dirname, 'build')));

// handle all routes
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


app.listen(port, () => console.log(`Listening on port ${port}`));