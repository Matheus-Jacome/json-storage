import { readFileSync, writeFileSync } from 'fs'
import { request } from 'http'

const app = express()
app.use(express.json())
const port = 5500
app.get('/', (req, res) => {
    try {
        const fileBuffer = readFileSync('./data.json')
        const fileText = fileBuffer.toString()
        const fileData = JSON.parse(fileText)

        res.send(fileData)
    } catch (error) {
        console.log("Algo inesperado ocorreu =/")
        res.status(500).send('Internal server error')
    }
})

app.post('/', (req, res) => {
    try {
        const fileBuffer = readFileSync('./data.json')
        const fileText = fileBuffer.toString()
        const highScores = JSON.parse(fileText)

        //console.log(request.body) 
        const playerIndex = highScores.findIndex(element => element.player === request.body.player) 
        const score = request.body.score


    } catch (error) {

    }
})

app.listen(port, () => {
    console.log(`Example app listen on port ${port}`)
})

