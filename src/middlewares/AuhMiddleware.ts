import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface TokenPayload {
  id: string
  iat: number
  exp: number
}

export default function AuthMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { authorization } = request.headers

    if (!authorization) {
      return response.status(401).json({
        message: 'Requisição não autorizada.',
      })
    }

    next()
  } catch (err) {
    return response.json(err)
  }
}
