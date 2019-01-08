import { DiscountClient } from '../proto/discount_grpc_pb'
import { CalcDiscountParameters } from '../proto/discount_pb'

const getDiscount = async (
  client: DiscountClient,
  productId: number,
  userId?: number,
  forceDiscountDebug?: number
): Promise<number> => {
  const param = new CalcDiscountParameters()
  param.setProductid(productId)
  if (userId) {
    param.setUserid(userId)
  }
  if (forceDiscountDebug === 0 || forceDiscountDebug) {
    param.setForceDiscountDebug(forceDiscountDebug)
  }

  return new Promise((resolve, reject) => {
    client.calcDiscount(param, (error, response) => {
      if (error) {
        return reject(error)
      }

      const value = response.getDiscount()
      resolve(value)
    })
  })
}

export { getDiscount }
