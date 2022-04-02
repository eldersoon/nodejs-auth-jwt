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

    if (authorization) {
      const full_authorization = authorization.split(' ')
      const token = full_authorization[1]
      jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, decoded) => {
        if (err) {
          return response.status(401).json({ message: 'Token inválido' })
        }
        next()
      })
    } else {
      return response.status(401).json({
        message: 'Requisição não autorizada.',
      })
    }
  } catch (err) {
    return response.json(err)
  }
}
