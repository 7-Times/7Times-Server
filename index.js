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
      date : '07/05/2022',
      className: 'Technology and Design'
    },
    1: {
      date : '07/05/2022',
      className: 'Turkish'
    },
    2: {
      date : '3rd Quiz/Test not available',
      className: ' '
    }
  })
})

app.listen(process.env.PORT || port, () => {
  console.log(`7Times server listening on port ${port}`)
})