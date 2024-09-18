import { Router } from 'express'
import { ProductController } from '../controllers/productController'

const productRouters = Router()

productRouters.get('/', ProductController.getAllProducts)
productRouters.get('/:id', ProductController.getProduct)

export default productRouters
