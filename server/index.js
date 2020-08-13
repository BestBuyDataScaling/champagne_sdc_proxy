const express = require('express')
const cors = requier('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello from the server!')
})
app.listen(3000, () => console.log('Server running on port 3000'))