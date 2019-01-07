import * as grpc from 'grpc'
import * as Koa from 'koa'
import { DiscountClient } from '../proto/discount_grpc_pb'

const setGrpcClient = (ctx: Koa.Context, next: () => Promise<any>) => {
  ctx.grpcClient = new DiscountClient('discount_server:50051', grpc.credentials.createInsecure())
  return next()
}

export default setGrpcClient
