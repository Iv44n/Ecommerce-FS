import { ErrorRequestHandler, Response } from 'express'
import { z } from 'zod'
import { INTERNAL_SERVER_ERROR, UNPROCESSABLE_CONTENT } from '../constants/http'
import { DatabaseError } from 'pg'
import AppError from '../utils/AppError'

const zodErrorHandler = (err: z.ZodError, res: Response) => {
  const errors = err.issues.map(issue => ({
    path: issue.path.join('.'),
    message: issue.message
  }))

  return res.status(UNPROCESSABLE_CONTENT).send({
    errors,
    message: JSON.parse(err.message)
  })
}

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.log(err)

  if (err instanceof z.ZodError) {
    zodErrorHandler(err, res)
    return
  }

  if (err instanceof DatabaseError) {
    res.status(INTERNAL_SERVER_ERROR).send('Database Error')
    return
  }

  if (err instanceof AppError) {
    res.status(err.statusCode).json({ error: err.message })
    return
  }

  res.status(INTERNAL_SERVER_ERROR).send('Internal Server Error')
}

export default errorHandler
