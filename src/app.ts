import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { v1Router } from './api/v1'

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1', v1Router)

export default app
