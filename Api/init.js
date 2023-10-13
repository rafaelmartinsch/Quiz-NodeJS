const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const perguntas = require('./routes/perguntas')
const respostas = require('./routes/respostas')


const app = express()
const port = 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/questions", perguntas)
app.use("/respostas", respostas)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})

