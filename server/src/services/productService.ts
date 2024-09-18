import { ProductModel } from '../models/productModel'

export class ProductService {

  static async getAllProducts() {
    return await ProductModel.getAllProducts()
  }

  static async getProduct({ id }: { id: string }) {
    return ProductModel.getProduct({ id })
  }
}
