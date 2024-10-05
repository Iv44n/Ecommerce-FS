import { ProductModel } from '../models/productModel'
import { Product } from '../types/product'

export class ProductService {

  static async getAllProducts({ limit = 10, offset = 0 }: { limit?: number, offset?: number }): Promise<Product[]> {
    return await ProductModel.getAllProducts({
      limit,
      offset
    })
  }

  static async getProduct({ id }: { id: string }): Promise<Product> {
    if (!id) {
      throw new Error('Missing id')
    }

    return ProductModel.getProduct({ id })
  }
}
