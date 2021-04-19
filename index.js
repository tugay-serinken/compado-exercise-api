const express = require('express')
const proxy = require('express-http-proxy')
const cors = require('cors')

const app = express()
app.use(cors())
app.use('/', proxy('https://svcs.sandbox.ebay.com'))
app.listen(4000, () => console.log('Ebay Forwarder listening on port 4000!'))
