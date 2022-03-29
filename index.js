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
      date : '31/03/2022',
      className: 'Science'
    },
    1: {
      date : '01/04/2022 (Watch out for April Fools!)',
      className: 'Religious Education'
    },
    2: {
      date : '04/05/2022',
      className: 'Math and Optional Math'
    }
  })
})

app.listen(process.env.PORT || port, () => {
  console.log(`7Times server listening on port ${port}`)
})