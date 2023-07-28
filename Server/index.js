import express from 'express'
import cors from 'cors'
import Connection from './database/db.js'
import DefaultData from './default.js'

const PORT = 8000
const app = express()

app.use(cors())
app.use(express.json())

Connection()
app.listen(PORT, () => console.log(`Server is running on port  ${PORT}`))
DefaultData()
