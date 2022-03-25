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
    0: {
      date : '28/03/2022',
      className: 'Social Science'
    },
    1: {
      date : '28/03/2022',
      className: 'Optional English'
    }
  })
})

app.listen(process.env.PORT || port, () => {
  console.log(`7Times server listening on port ${port}`)
})