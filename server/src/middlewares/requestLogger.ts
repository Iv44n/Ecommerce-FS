import { RequestHandler } from 'express'
import { logger } from '../utils/logger'

export const requestLogger: RequestHandler = (req, _res, next) => {
  logger.info('------------------------')
  logger.info('METHOD: ', req.method)
  logger.info('PATH: ', req.path)
  logger.info('BODY: ', req.body)
  logger.info('------------------------')

  next()
}
