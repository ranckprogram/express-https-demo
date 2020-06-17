const https = require('https');
const express = require('express');

const pem = require('pem');



pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
  if (err) {
    throw err
  }
  var app = express()

  app.get('/', function (req, res) {
    res.send('o hai!')
  })

  https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(443)
})