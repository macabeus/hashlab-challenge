// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var discount_pb = require('./discount_pb.js');

function serialize_CalcDiscountParameters(arg) {
  if (!(arg instanceof discount_pb.CalcDiscountParameters)) {
    throw new Error('Expected argument of type CalcDiscountParameters');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CalcDiscountParameters(buffer_arg) {
  return discount_pb.CalcDiscountParameters.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CalcDiscountResult(arg) {
  if (!(arg instanceof discount_pb.CalcDiscountResult)) {
    throw new Error('Expected argument of type CalcDiscountResult');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CalcDiscountResult(buffer_arg) {
  return discount_pb.CalcDiscountResult.deserializeBinary(new Uint8Array(buffer_arg));
}


var DiscountService = exports.DiscountService = {
  calcDiscount: {
    path: '/Discount/CalcDiscount',
    requestStream: false,
    responseStream: false,
    requestType: discount_pb.CalcDiscountParameters,
    responseType: discount_pb.CalcDiscountResult,
    requestSerialize: serialize_CalcDiscountParameters,
    requestDeserialize: deserialize_CalcDiscountParameters,
    responseSerialize: serialize_CalcDiscountResult,
    responseDeserialize: deserialize_CalcDiscountResult,
  },
};

exports.DiscountClient = grpc.makeGenericClientConstructor(DiscountService);
