import * as dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

dotenv.config()

const app = express()
const { EXPRESS_PORT } = process.env

app.set('port', EXPRESS_PORT || 3000)

app.use(express.json())
app.use(morgan("dev"))

app.get('/', (req, res) => {
  res.json({message: "hola mundo"})
})

app.listen(app.get('port'), () => {
  console.log(`Express Server Started on port: ${app.get('port')}`)
})

export default app