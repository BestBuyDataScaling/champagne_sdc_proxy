const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const axios = require('axios');
require('newrelic');

app.use(cors())
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())


app.get('/products/:company/:material/:product/:color', (req, res) => {
  let company = req.params.company;
  let material = req.params.material;
  let product = req.params.product;
  let color = req.params.color;

  axios.get(`http://localhost:3001/products/${company}/${material}/${product}/${color}`)
    .then(response => res.send(response.data))
})


app.listen(3003, () => console.log('Server running on port 3003'))