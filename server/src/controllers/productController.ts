import { Request, Response } from 'express'
import { ProductService } from '../services/productService'

export class ProductController {

  static async getAllProducts(req: Request, res: Response) {
    const limit = parseInt(req.query.limit as string) || 10
    const offset = parseInt(req.query.offset as string) || 0

    try {
      const products = await ProductService.getAllProducts({
        limit,
        offset
      })

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
