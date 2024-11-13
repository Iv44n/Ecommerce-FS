import { Request, Response } from 'express'
import { ProductService } from '../services/productService'
import catchErrors from '../utils/catchErrors'
import { z } from 'zod'
import { BAD_REQUEST } from '../constants/http'

export class ProductController {

  static getAllProductsHandler = catchErrors(async (req: Request, res: Response) => {
    const querySchema = z.object({
      limit: z.string().optional().transform(val => parseInt(val || '10')),
      offset: z.string().optional().transform(val => parseInt(val || '0'))
    })

    const { limit, offset } = querySchema.parse(req.query)

    const products = await ProductService.getAllProducts({ limit, offset })

    return res.json(products)
  })

  static getProductByIdHandler = catchErrors(async (req: Request, res: Response) => {
    const paramsSchema = z.object({
      id: z.string().transform(val => parseInt(val, 10))
    })

    const { id } = paramsSchema.parse(req.params)

    if(isNaN(id)){
      return res.status(BAD_REQUEST).json({ error: 'Invalid product ID format.' })
    }

    const product = await ProductService.getProductById({ id })
    return res.json(product)
  })
}
