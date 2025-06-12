import { Router } from 'express'

const healthRoutes = Router()

healthRoutes.get('/', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '1.0.0', // Optional: tie this to your package.json
  })
})

export default healthRoutes
