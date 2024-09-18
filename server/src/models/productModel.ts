import { pool } from '../config/db'

export class ProductModel {
  static async getAllProducts() {
    const { rows } = await pool.query('SELECT * FROM products')
    return rows
  }

  static async getProduct({ id }: { id: string }) {
    const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [id])
    return rows[0]
  }
}
