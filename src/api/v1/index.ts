import { Router } from 'express'
import healthRoutes from './routes/helath.route'

export const v1Router = Router()

v1Router.use('/health', healthRoutes)
// v1Router.use('/users', userRoutes)
