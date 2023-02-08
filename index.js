const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors');
const app = express();
var jsonParser = bodyParser.json()
app.use(cors());

const port = 3000

app.post('/cav-lti-analytics', jsonParser, (req, res) => {
  console.log('cav-lti-analytics called');
    console.log('data sent from request is', req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})