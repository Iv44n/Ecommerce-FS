import { RequestHandler } from 'express'
import { logger } from '../utils/logger'

const filterSensitiveData = (body: any) => {
  const bodyCopy = { ...body }

  if (bodyCopy.password) bodyCopy.password = '***'
  if (bodyCopy.confirmPassword) bodyCopy.confirmPassword = '***'

  return bodyCopy
}

export const requestLogger: RequestHandler = (req, _res, next) => {
  logger.info('------------------------')
  logger.info('METHOD: ', req.method)
  logger.info('PATH: ', req.path)
  logger.info('BODY: ', filterSensitiveData(req.body))
  logger.info('------------------------')

  next()
}
