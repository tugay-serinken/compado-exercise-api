const express = require('express')
const proxy = require('express-http-proxy')
const cors = require('cors')

const appId = 'WandoInt-217b-42d8-a699-e79808dd505e'
const app = express()
app.use(cors())
app.use(proxy('https://jsonplaceholder.typicode.com'))
app.listen(4000, () => console.log('API Forwarder listening on port 4000!'))
