//A server that responds with hello world

const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors({
  origin: '*',
}))

app.get('/', (req, res) => {
  res.send({ 
    message: 'Hello World!'
  })
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})