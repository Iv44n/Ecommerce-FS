import { Request, Response } from 'express'
import { ProductService } from '../services/productService'
import catchErrors from '../utils/catchErrors'

export class ProductController {

  static getAllProducts = catchErrors(async (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 10
    const offset = parseInt(req.query.offset as string) || 0

    const products = await ProductService.getAllProducts({
      limit,
      offset
    })

    return res.json(products)
  })

  static getProduct = catchErrors(async (req: Request, res: Response) => {
    const product = await ProductService.getProduct({ id: req.params.id })
    return res.json(product)
  })
}
