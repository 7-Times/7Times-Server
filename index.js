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
    message: 'Server Online'
  })
})

app.get('/latest/quiz', (req, res) => {
  res.send({ 
    date : '28/03/2020',
    className: 'Sosyal Bilgiler'
  })
})

app.listen(process.env.PORT || port, () => {
  console.log(`7Times server listening on port ${port}`)
})