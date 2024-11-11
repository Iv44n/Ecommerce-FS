import pg, { ClientConfig } from 'pg'
import { DB_CONFIG } from '../constants/env'

const pgConfig: ClientConfig = {
  user: DB_CONFIG.DB_USER,
  host: DB_CONFIG.DB_HOST,
  database: DB_CONFIG.DB_NAME,
  password: DB_CONFIG.DB_PASSWORD,
  port: parseInt(DB_CONFIG.DB_PORT)
}

export const pool = new pg.Pool(pgConfig)
