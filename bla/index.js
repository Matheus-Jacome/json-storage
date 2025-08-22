import express from "express"

const app = express()
const port = 5500

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (request, res) => {
    res.send('mensagem teste')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
