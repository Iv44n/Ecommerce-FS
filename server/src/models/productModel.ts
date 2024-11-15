import { pool } from '../config/db'
import { NOT_FOUND } from '../constants/http'
import { Product } from '../types/product'
import AppError from '../utils/AppError'

export class ProductModel {

  private static readonly sqlGetAllProducts: string = 'SELECT * FROM products LIMIT $1 OFFSET $2'
  private static readonly sqlGetProductById: string = 'SELECT * FROM products WHERE id = $1'

  static async getAllProducts({ limit, offset }: { limit: number, offset: number }): Promise<Product[]> {
    const { rows } = await pool.query(this.sqlGetAllProducts, [limit, offset])
    return rows
  }

  static async getProductById({ id }: { id: string | number }): Promise<Product> {
    const { rows } = await pool.query(this.sqlGetProductById, [id])

    if (rows.length === 0) {
      throw new AppError(NOT_FOUND, 'Product not found')
    }

    return rows[0]
  }
}
