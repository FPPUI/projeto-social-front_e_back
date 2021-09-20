const express = require('express')
const cors = require('cors')

const router = require('./routes')

const app = express()

require('dotenv/config');

app.use(cors())
app.use(express.json())
app.use('/', router)

const port = process.env.NODE_PORT || 5000
app.listen(port, console.log(`Working in port ${port}`))