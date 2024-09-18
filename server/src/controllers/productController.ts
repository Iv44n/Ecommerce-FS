import { Request, Response } from 'express'
import { ProductService } from '../services/productService'

export class ProductController {

  static async getAllProducts(req: Request, res: Response) {
    try {
      const products = await ProductService.getAllProducts()
      return res.json(products)
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        error: 'Cannot get products'
      })
    }
  }

  static async getProduct(req: Request, res: Response) {
    try {
      const product = await ProductService.getProduct({ id: req.params.id })
      return res.json(product)
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        error: 'Cannot get product'
      })
    }
  }
}
