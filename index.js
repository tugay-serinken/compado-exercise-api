const express = require('express')
const proxy = require('express-http-proxy')
const cors = require('cors')

const appId = 'WandoInt-217b-42d8-a699-e79808dd505e'
const app = express()
app.use(cors())
app.use(
  proxy('https://svcs.sandbox.ebay.com', {
    proxyReqPathResolver: function (req) {
      const parts = req.url.split('?')
      const queryString = parts[1]
      const updatedPath = parts[0]
      return (
        updatedPath +
        ('?SECURITY-APPNAME=' + appId) +
        (queryString ? '&' + queryString : '')
      )
    },
  })
)
app.listen(4000, () => console.log('Ebay Forwarder listening on port 4000!'))
