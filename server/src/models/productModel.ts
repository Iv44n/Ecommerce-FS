import { pool } from '../config/db'
import { Product } from '../types/product'

export class ProductModel {

  private static readonly sqlGetAllProducts: string = 'SELECT * FROM products LIMIT $1 OFFSET $2'
  private static readonly sqlGetProductById: string = 'SELECT * FROM products WHERE id = $1'

  static async getAllProducts({ limit, offset }: { limit: number, offset: number }): Promise<Product[]> {
    try {
      const { rows } = await pool.query(this.sqlGetAllProducts, [limit, offset])
      return rows
    } catch (error) {
      console.error(error)
      throw new Error('Error retrieving products')
    }
  }

  static async getProduct({ id }: { id: string }): Promise<Product> {
    try {
      const { rows } = await pool.query(this.sqlGetProductById, [id])

      if (rows.length === 0) {
        throw new Error('Product not found')
      }

      return rows[0]
    } catch (error) {
      console.error(error)
      throw new Error(`Error retrieving product with id ${id}`)
    }
  }
}
