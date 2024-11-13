import { Router } from 'express'
import { ProductController } from '../controllers/productController'

const productRouters = Router()

productRouters.get('/', ProductController.getAllProductsHandler)
productRouters.get('/:id', ProductController.getProductByIdHandler)

export default productRouters
