// IMPORT MODULES
import express from 'express'

// IMPORT ROUTES
import productRouters from './routes/productRoutes'

// IMPORT MIDDLEWARES
import { requestLogger } from './middlewares/requestLogger'

const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(requestLogger)

// ROUTES
app.use('/api/products', productRouters)

export default app
