const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

app.use(cors())
app.use(express.static(path.join(__dirname, '../public')))


app.listen(3003, () => console.log('Server running on port 3003'))