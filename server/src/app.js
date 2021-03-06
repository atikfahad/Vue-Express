console.log('Hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  console.log(req.body.email)
  res.send({
    message: `Hello ${req.body.email}!, Your user was registered! Have fun!`
  })
})

app.listen(process.env.port || 8081)
