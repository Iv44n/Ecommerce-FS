// IMPORT MODULES
import express from 'express'

// IMPORT ROUTES
import productRouters from './routes/productRoutes'

const app = express()
app.use(express.json())

// ROUTES
app.use('/api/products', productRouters)

export default app
