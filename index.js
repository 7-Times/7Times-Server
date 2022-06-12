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
      date : '1st Quiz/Test not available',
      className: 'The School Year Is over'
    },
    1: {
      date : '2nd Quiz/Test not available',
      className: 'The School Year Is over '
    },
    2: {
      date : '3rd Quiz/Test not available',
      className: 'The School Year Is over '
    }
  })
})

app.listen(process.env.PORT || port, () => {
  console.log(`7Times server listening on port ${port}`)
})