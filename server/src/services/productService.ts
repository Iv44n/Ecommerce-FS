import { ProductModel } from '../models/productModel'
import { Product } from '../types/product'

export class ProductService {

  static async getAllProducts({ limit = 10, offset = 0 }: { limit: number, offset: number }): Promise<Product[]> {
    return await ProductModel.getAllProducts({ limit, offset })
  }

  static async getProductById({ id }: { id: string | number }): Promise<Product> {
    return ProductModel.getProductById({ id })
  }
}
