const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors())

//middleware to get information from body of website
app.use(express.json())

//Available Routes
app.use('/api/items',require('./routes/item'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})